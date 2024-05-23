import React from "react";
import { Box, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews = [] }) => {
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
