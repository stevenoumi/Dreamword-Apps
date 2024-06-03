import React from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import "../style/review.css";
import DeleteIcon from '@mui/icons-material/Delete';

const ReviewItem = ({ review }) => {
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/reviews/delete-review/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete review");
      }

      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'avis:", error);
    }
  };

  if (!review) {
    return (
      <div>
        <Typography variant="h6">Aucun avis trouvé</Typography>
      </div>
    );
  }

  return (
    <Box mb={2} p={2} border={1} borderRadius={2}>
      <Stack direction="row" spacing={2} className="review-item">
        <div>
          <Avatar
            src={review.photo ? review.photo : "profile.png"}
            alt={review.title}
            style={{ width: 70, height: 70 }}
          />
        </div>
        <div>
          <Typography variant="body1" className="review-item-evaluation">
            <strong> User: {review.last_name}</strong>
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
            <strong>Date du dernier achat : </strong> {review.created_at ? review.created_at.slice(0, 10) : ""}
          </Typography>
        </div>
        <div>
          <DeleteIcon onClick={() => handleDelete(review.review_id)} />
        </div>
      </Stack>
    </Box>
  );
};

export default ReviewItem;
