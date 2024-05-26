import React, { createContext, useState } from 'react';

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [burgers, setBurgers] = useState([]);

  const handleRatingChange = async (burgerId, newRating) => {

    console.log(burgerId, newRating);
    setBurgers(prevBurgers =>
      prevBurgers.map(burger =>
        burger.product_id === burgerId ? { ...burger, rating: newRating } : burger
      )
    );
  
    try {
      const response = await fetch(`http://localhost:5000/reviews/add-review-rating`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ product_id:burgerId, rating: newRating })
      });
      if (!response.ok) {
        throw new Error('Failed to update rating');
      }
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };
  

  const handleCommentSubmit = async (burgerId, comment) => {

    
    try {
      const response = await fetch(`http://localhost:5000/reviews/add-review-comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ product_id: burgerId, comment})
      });
      if (response.ok) {
        const newReview = await response.json();
        setBurgers(prevBurgers =>
          prevBurgers.map(burger =>
            burger.id === burgerId
              ? {
                  ...burger,
                  reviews: [...burger.reviews, newReview]
                }
              : burger
          )
        );
      } else {
        throw new Error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const getBurgerById = async (id) => {
    const token = localStorage.getItem('token'); // Assurez-vous que le token est stocké dans le localStorage
  
    if (!token) {
      console.error('Token not found');
      return null;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/reviews/get-review/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du produit');
      }
  
      const product = await response.json();
      setBurgers(prevBurgers => [...prevBurgers, product]);
      return product;
    } catch (err) {
      console.error('Erreur lors de la récupération du produit:', err);
      return null;
    }
  };
  


  return (
    <ReviewContext.Provider value={{ burgers, handleRatingChange, handleCommentSubmit, getBurgerById }}>
      {children}
    </ReviewContext.Provider>
  );
};
