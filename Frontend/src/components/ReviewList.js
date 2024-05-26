import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";

function ReviewList({ burgerId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchreviews = async () => {
      try {
        const token = localStorage.getItem("token");
        const apiUrl = `http://localhost:5000/api/get-review/${burgerId}`;
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const reviews = await response.json();
          setReviews(reviews);
          console.log("Avis récupérés avec succès", reviews);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des avis:", error);
      }
    };

    fetchreviews();
  }, [burgerId]);

  return (
    <Box>
      <Typography variant="h6">Avis et Commentaires</Typography>
      {reviews.map((review) => (
        <ReviewItem key={review.product_id} review={review} />
      ))}
    </Box>
  );
};

export default ReviewList;
