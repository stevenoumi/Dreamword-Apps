const pool = require("../config/dbConfig");

exports.getProductReviews = async (req, res) => {
  const productId = req.params.id;

  try {
    const sql = `
      SELECT 
          p.product_id,
          p.title,
          p.description,
          p.image,
          p.price,
          p.stock,
          p.rating,
          p.category_id,
          r.review_id,
          r.user_id,
          r.rating AS review_rating,
          r.comment,
          r.created_at AS review_created_at,
          r.updated_at AS review_updated_at
      FROM 
          Products p
      LEFT JOIN 
          Reviews r ON p.product_id = r.product_id
      WHERE 
          p.product_id = ?;
    `;

    const [result] = await pool.query(sql, [productId]);

    if (result.length > 0) {
      const productInfo = {
        product_id: result[0].product_id,
        title: result[0].title,
        description: result[0].description,
        image: result[0].image,
        price: result[0].price,
        stock: result[0].stock,
        rating: result[0].rating,
        category_id: result[0].category_id,
        reviews: result.filter(review => review.review_id !== null).map(review => ({
          review_id: review.review_id,
          user_id: review.user_id,
          rating: review.review_rating,
          comment: review.comment,
          created_at: review.review_created_at,
          updated_at: review.review_updated_at,
        })),
      };

      res.status(200).json(productInfo);
    } else {
      res.status(404).json({ error: 'Produit non trouvé ou aucun avis trouvé' });
    }
  } catch (err) {
    console.error('Erreur lors de la récupération des avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.addProductReviewRating = async (req, res) => {
  const userId = req.user.userId;
  const { product_id: productId, rating } = req.body;

  try {
    // Vérifie si l'utilisateur a déjà ajouté un commentaire pour ce produit
    const [existingReview] = await pool.query(
      'SELECT * FROM Reviews WHERE user_id = ? AND product_id = ?',
      [userId, productId]
    );

    // Si un commentaire existe déjà, mettez à jour le rating
    if (existingReview.length > 0) {
      await pool.query(
        'UPDATE Reviews SET rating = ? WHERE user_id = ? AND product_id = ?',
        [rating, userId, productId]
      );
      res.status(200).json({ message: 'Le commentaire existant a été mis à jour avec succès' });
    } else {
      // Ajouter un nouveau commentaire si aucun commentaire n'existe déjà
      const [result] = await pool.query(
        'INSERT INTO Reviews (user_id, product_id, rating) VALUES (?, ?, ?)',
        [userId, productId, rating]
      );

      const newReview = {
        review_id: result.insertId,
        user_id: userId,
        product_id: productId,
        rating,
        created_at: new Date(),
        updated_at: new Date()
      };

      res.status(201).json(newReview);
    }
  } catch (err) {
    console.error('Erreur lors de l\'ajout/mise à jour de l\'avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};



exports.addProductReviewComment = async (req, res) => {
  const userId = req.user.userId; 
  const { product_id: productId, comment, rating } = req.body;

  try {
    const [result] = await pool.query(
      'UPDATE Reviews SET rating = ?, comment = ? WHERE product_id = ? AND user_id = ?',
      [rating, comment, productId, userId]
    );

    res.status(201).json({ message: 'Avis mis à jour avec succès' });
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l\'avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


exports.getReviewsByProductId = async (req, res) => {
  const { id: productId } = req.params; // Renommer productId pour correspondre à l'identifiant de la route
  try {
    const [rows] = await pool.query(
      'SELECT R.comment, R.review_id, R.rating, R.created_at, U.first_name, U.photo, U.last_name FROM Reviews R JOIN Users U ON R.user_id = U.user_id WHERE R.product_id = ?',
      [productId]
    );
    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ error: "Aucun avis trouvé pour ce produit" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};

exports.deleteReview = async (req, res) => {
  const userId = req.user.userId;
  console.log('userId:', userId);
  const { id: reviewId } = req.params;

  console.log('reviewId:', reviewId);

  try {
    // Vérifiez d'abord si l'utilisateur a le droit de supprimer cet avis
    const [rows] = await pool.query('SELECT user_id FROM Reviews WHERE review_id = ?', [reviewId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Avis non trouvé' });
    }
    const reviewUserId = rows[0].user_id;
    console.log('reviewUserId:', reviewUserId , 'userId:', userId);
    if (reviewUserId !== userId) {
      return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à supprimer cet avis' });
    }

    // Si l'utilisateur a le droit de supprimer cet avis, procédez à la suppression
    const [result] = await pool.query('DELETE FROM Reviews WHERE review_id = ?', [reviewId]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Avis supprimé avec succès' });
    } else {
      res.status(404).json({ error: 'Avis non trouvé ou non autorisé' });
    }
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


