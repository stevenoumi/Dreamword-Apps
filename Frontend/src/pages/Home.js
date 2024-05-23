import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import BurgerItem from '../components/BurgerItem';

const initialBurgers = [
  {
    id: 1,
    name: 'Cheeseburger',
    description: 'Un délicieux cheeseburger avec du fromage fondu et des légumes frais.',
    rating: 4,
    reviews: [
      { id: 1, rating: 4, comment: 'Très bon burger!' },
      { id: 2, rating: 5, comment: 'Excellent, je recommande!' }
    ]
  },
  // Ajouter d'autres burgers si nécessaire
];

const Home = () => {
  const [burgers, setBurgers] = useState(initialBurgers);

  const handleRatingChange = (id, newRating) => {
    setBurgers((prevBurgers) =>
      prevBurgers.map((burger) =>
        burger.id === id ? { ...burger, rating: newRating } : burger
      )
    );
  };

  const handleCommentSubmit = (id, comment) => {
    setBurgers((prevBurgers) =>
      prevBurgers.map((burger) =>
        burger.id === id
          ? {
              ...burger,
              reviews: [
                ...burger.reviews,
                { id: burger.reviews.length + 1, rating: burger.rating, comment }
              ]
            }
          : burger
      )
    );
  };

  return (
    <>
      <CssBaseline />
      <Container>
        {burgers.map((burger) => (
          <BurgerItem
            key={burger.id}
            burger={burger}
            onRatingChange={handleRatingChange}
            onCommentSubmit={handleCommentSubmit}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;
