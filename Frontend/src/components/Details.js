import React from "react";
import { useContext } from "react";
import {
  Button,
  CardMedia,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../style/detail.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";

function Detail({ selectedItem }) {

  const handleBack = () => {
    window.history.back();
  };
   const { addToCart } = useContext(CartContext);
  const { addToFavorite } = useContext(FavoriteContext);
  return (
    <div>
      <Stack direction="row" spacing={5} className="detail-container">
        <div className="detail-image">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIosNewIcon />}
            className="detail-back-button"
            onClick={handleBack}
          >
            Retour
          </Button>
          <CardMedia
            component="img"
            image={selectedItem.image}
            alt={selectedItem.title}
          />
        </div>
        <div>
          <Stack
            direction="column"
            className="detail-info-container"
            spacing={3}
          >
            <div>
              <Typography variant="h6" className="detail-category">
                Catégorie ID: {selectedItem.category_id}
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="detail_article_title">
                {selectedItem.title}
              </Typography>
            </div>
            <div>
              <Typography variant="h6" className="detail-price">
                {selectedItem.price} €
              </Typography>
            </div>
            <div>
              <Typography variant="body1" className="detail-description">
                {selectedItem.description}
              </Typography>
            </div>
            <div>
              <Stack
                className="detail-available"
                variant="outlined"
                color="success"
              >
                {selectedItem.stock > 0 ? "Il y a du stock" : "Rupture de stock"}
              </Stack>
            </div>
            <div className="detail-rating">
              <Rating
                value={selectedItem.rating}
                readOnly
                size="large"
                precision={0.5}
              />
              <Link to={`/review/${selectedItem.product_id}`}>
                <Typography variant="body1" className="detail-rating-text">
                  Donner votre avis
                  <StarIcon fontSize="medium" />
                </Typography>
              </Link>
            </div>
            <div>
              <Stack direction="row" spacing={5} className="detail-action">
                <div>
                  <Button variant="contained" className="detail-add-to-cart" onClick={() => addToCart(selectedItem)}>
                    Ajouter au panier
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    className="detail-add-to-favorite"
                    onClick={() => addToFavorite(selectedItem)}
                  >
                    <FavoriteBorderIcon />
                  </Button>
                </div>
              </Stack>
            </div>
            <div>
              <Divider className="detail-divider" />
            </div>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

export default Detail;
