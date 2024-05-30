import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ burgerId }) => { // Utilisez burgerId comme propriété
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const token = localStorage.getItem('token'); 
      if (!token) {
        console.error('Token not found');
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:5000/reviews/get-product-reviews/${burgerId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Ajouter le token dans l'en-tête de la requête
          }
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
  
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des avis:", error);
      }
    };
  
    fetchReviews();
  }, [burgerId]); 

  return (
    <Box>
      <Typography variant="h6">Avis et Commentaires</Typography>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </Box>
  );
};

export default ReviewList;
