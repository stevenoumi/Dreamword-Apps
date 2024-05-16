import {
  Button,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../style/detail.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Detail({ selectedItem }) {

  const handleBack = () => {
    window.history.back();
  }

  return (
    <div>
      <Stack direction="row" spacing={5} className="detail-container">
        <item className="detail-image">
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
        </item>
        <item>
          <Stack
            direction="column"
            className="detatil-info-container"
            spacing={3}
          >
            <item>
              <Typography variant="h6" className="detail-category">
                Category de l'article
              </Typography>
            </item>
            <item>
              <Typography
                variant="h5"
                className="detail_article_title"
              >
                {selectedItem.title}
              </Typography>
            </item>
            <item>
              <Typography variant="h6" className="detail-price">
                {selectedItem.price} €
              </Typography>
            </item>
            <item>
              <Typography variant="body1" className="detail-description">
                {selectedItem.caracteristiques}
              </Typography>
            </item>
            <item>
              <Stack
                className="detail-available"
                variant="outlined"
                color="succes"
              >
                il ya du stock
              </Stack>
            </item>
            <item>
              <Stack direction="row" spacing={5} className="detail-action">
                <item>
                  <Button variant="contained" className="detail-add-to-cart">
                    Ajouter au panier
                  </Button>
                </item>
                <item>
                  <Button
                    variant="contained"
                    className="detail-add-to-favorite"
                  >
                    <FavoriteBorderIcon />
                  </Button>
                </item>
              </Stack>
            </item>
            <item>
              <Divider className="detail-divider" />
            </item>
          </Stack>
        </item>
      </Stack>
    </div>
  );
}

export default Detail;
