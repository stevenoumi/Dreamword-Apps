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
  const userId = req.user.userId; // Assurez-vous que le middleware d'authentification ajoute le userId au req.user
  const { product_id: productId, rating } = req.body;

  try {
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
  } catch (err) {
    console.error('Erreur lors de l\'ajout de l\'avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.addProductReviewComment = async (req, res) => {
  const userId = req.user.userId; 
  const { product_id: productId, comment } = req.body;

  console.log(req.body);

  try {
    const [result] = await pool.query(
      'INSERT INTO Reviews (user_id, product_id, comment) VALUES (?, ?, ?)',
      [userId, productId, comment]
    );

    const newReview = {
      review_id: result.insertId,
      user_id: userId,
      product_id: productId,
      comment,
      created_at: new Date(),
      updated_at: new Date()
    };

    res.status(201).json(newReview);
  } catch (err) {
    console.error('Erreur lors de l\'ajout de l\'avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.deleteReview = async (req, res) => {
  const userId = req.user.userId;
  const { id: reviewId } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM Reviews WHERE id = ? AND user_id = ?', [reviewId, userId]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Avis supprimé' });
    } else {
      res.status(404).json({ error: 'Avis non trouvé ou non autorisé' });
    }
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'avis:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

