import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';

const labels = {
  0.5: 'Très Mauvais',
  1: 'Mauvais',
  1.5: 'Pas Terrible',
  2: 'Moyen',
  2.5: 'Acceptable',
  3: 'Correct',
  3.5: 'Bon',
  4: 'Très Bon',
  4.5: 'Excellent',
  5: 'Exceptionnel',
};

function getLabelText(value) {
  return `${value} Étoile${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '16px',
});

const RatingComponent = ({ value, onRatingChange }) => {
  const [hover, setHover] = useState(-1);

  return (
    <StyledBox>
      <Rating
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => onRatingChange(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{ ml: 2 }}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </StyledBox>
  );
};

export default RatingComponent;
