import React from 'react';
import { Box } from '@mui/material';
import BurgerItem from './BurgerItem';

const BurgerList = ({ burgers, onRatingChange, onCommentSubmit }) => {
  return (
    <Box className='burger-list'>
      {burgers.map((burger) => (
        <BurgerItem
          key={burger.id}
          burger={burger}
          onRatingChange={onRatingChange}
          onCommentSubmit={onCommentSubmit}
        />
      ))}
    </Box>
  );
};

export default BurgerList;
