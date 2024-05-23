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

function Detail({ selectedItem }) {
  const handleBack = () => {
    window.history.back();
  };

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
                Category de l'article
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
                {selectedItem.caracteristiques}
              </Typography>
            </div>
            <div>
              <Stack
                className="detail-available"
                variant="outlined"
                color="succes"
              >
                il ya du stock
              </Stack>
            </div>
            <div className="detail-rating ">
              <Rating defaultValue={3} readOnly size="large" precision={0.5} />
              <Link to={`/review/${selectedItem.id}`}>
                <Typography variant="body1" className="detail-rating-text">
                Donner votre avis
                <StarIcon fontSize="medium" />
                </Typography>
              </Link>
            </div>
            <div>
              <Stack direction="row" spacing={5} className="detail-action">
                <div>
                  <Button variant="contained" className="detail-add-to-cart">
                    Ajouter au panier
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    className="detail-add-to-favorite"
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
