import React, { createContext, useState } from 'react';
import { ItemList } from '../datas/ItemList';

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [burgers, setBurgers] = useState(ItemList);

  const handleRatingChange = (burgerId, newRating) => {
    setBurgers(prevBurgers =>
      prevBurgers.map(burger =>
        burger.id === burgerId ? { ...burger, rating: newRating } : burger
      )
    );
  };

  const handleCommentSubmit = (burgerId, comment) => {
    setBurgers(prevBurgers =>
      prevBurgers.map(burger =>
        burger.id === burgerId
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

  const getBurgerById = (id) => {
    return burgers.find(burger => burger.id === id);
  };

  return (
    <ReviewContext.Provider value={{ burgers, handleRatingChange, handleCommentSubmit, getBurgerById }}>
      {children}
    </ReviewContext.Provider>
  );
};
