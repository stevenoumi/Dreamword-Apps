// src/pages/Review.js
import React, { useContext, useEffect, useState } from 'react';
import { Typography, Container, CssBaseline } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ReviewContext } from '../context/ReviewContext';
import BurgerItem from '../components/BurgerItem';
import "../style/review.css";

const Review = () => {
  const { id } = useParams();
  const { getBurgerById } = useContext(ReviewContext);
  const burgerId = parseInt(id);
  const [burger, setBurger] = useState(null);

  useEffect(() => {
    const fetchedBurger = getBurgerById(burgerId);
    setBurger(fetchedBurger);
  }, [burgerId, getBurgerById]);

  if (!burger) {
    return <Typography variant="h4">Article non trouvé</Typography>;
  }

  return (
    <div className='review-container'>
      <CssBaseline />
      <Container>
        <BurgerItem burgerId={burgerId} />
      </Container>
    </div>
  );
};

export default Review;
