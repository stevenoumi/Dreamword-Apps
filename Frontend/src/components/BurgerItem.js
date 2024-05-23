// src/components/BurgerItem.js
import React, { useContext, useEffect, useState } from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { ReviewContext } from "../context/ReviewContext";
import RatingComponent from "./RatingComponent";
import ReviewList from "./ReviewList";
import CommentForm from "./CommentForm";
import "../style/burgerItem.css";

const BurgerItem = ({ burgerId }) => {
  const { getBurgerById, handleRatingChange, handleCommentSubmit } = useContext(ReviewContext);
  const [burger, setBurger] = useState(null);

  useEffect(() => {
    const fetchedBurger = getBurgerById(burgerId);
    setBurger(fetchedBurger);
  }, [burgerId, getBurgerById]);

  if (!burger) {
    return <div>Loading...</div>; // ou un placeholder de chargement
  }

  return (
    <div>
      <Stack className="burgeritem-component" direction="column" spacing={1}>
        <div className="burgeritem-title">
          <Avatar src={burger.image} alt={burger.title} mr={2} style={{ width: 70, height: 70 }} />
          <div className="burgeritem-title-name">
            <Typography variant="h4" fontFamily="Times New Roman">
              {burger.title}
            </Typography>
          </div>
          <div className="burgeritem-title-description">
            <Typography variant="body1" fontFamily="Times New Roman">
              {burger.description}
            </Typography>
          </div>
        </div>
        <div>
          <RatingComponent
            value={burger.rating}
            onRatingChange={(newRating) => handleRatingChange(burger.id, newRating)}
            fontFamily="Times New Roman"
          />
        </div>
        <div className="burgeritem-reviews">
          <ReviewList reviews={burger.reviews} />
        </div>
        <CommentForm
          burgerId={burger.id}
          onSubmit={(comment) => handleCommentSubmit(burger.id, comment)}
          className="burgeritem-commentform"
        />
      </Stack>
    </div>
  );
};

export default BurgerItem;
