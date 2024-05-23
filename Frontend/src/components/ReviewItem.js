// src/components/ReviewItem.js
import React from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import "../style/review.css";

const ReviewItem = ({ review }) => {
  if (!review) {
    return null; // ou un placeholder de chargement
  }

  return (
    <Box mb={2} p={2} border={1} borderRadius={2}>
      <Stack direction="row" spacing={2} className="review-item">
        <div>
          <Avatar
            src={(review.image) ? review.image : "profile.png"}
            alt={review.title}
            style={{ width: 70, height: 70 }}
          />
        </div>
        <div>
          <Typography variant="h7" className="review-item-evaluation">
            <strong> User: userName </strong>
          </Typography>
          <Typography variant="body1" className="review-item-evaluation">
            <strong>Évaluation: </strong>{" "}
            <Rating
              value={review.rating}
              readOnly
              className="review-item-evaluation-star"
            />
          </Typography>
          <Typography variant="body2">
            <strong>Commentaire:</strong> {review.comment}
          </Typography>
        </div>
        <div className="review-item-date">
          <Typography variant="body2">
            <strong>Date du dernier achat : </strong> {review.date}
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default ReviewItem;
