import {
  Box,
  Button,
  CardMedia,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../style/detail.css";
import Carousel from "react-material-ui-carousel";

function Detail({ selectedItem }) {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  return (
    <div>
      <Stack direction="row" spacing={3} className="detail-container">
        <item>
          <ImageList className="image-list" cols={1} >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?`}
                  src={`${item.img}?`}
                  alt={item.title}
                  className="image-list-item"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </item>
        <item className="detail-main-image">
          <Carousel  
            animation="slide"
            className="carousel-container"
            navButtonsProps={{
              style: {
                backgroundColor: "green",
                borderRadius: 10,
              },
            }}
          >
            {itemData.map((item, i) => (
              <Box key={i}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  className="detail-main-image"
                  image={item.img}
                />
              </Box>
            ))}
          </Carousel>
        </item>
        <item>
          <Stack direction="column" className="detatil-info-container" spacing={3}>
            <item>
              <Typography variant="h6" className="detail-category">
                Category de l'article
              </Typography>
            </item>
            <item>
              <Typography
                variant="h5"
                fontWeight="fontWeightBold"
                className="detail_article_title"
              >
                {selectedItem.title}
              </Typography>
            </item>
            <item>
              <Typography variant="h6" className="price">
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
              <Stack direction="row"  spacing={2} >
                <Stack direction="row" className="detail-quantity" spacing={1}>
                  <Button className="detail-quantity-button">
                    <RemoveIcon />
                  </Button>
                  <Typography variant="h6" className="detail-quantity-number">
                    {" "}
                    1{" "}
                  </Typography>
                  <Button className="detail-quantity-button">
                    <AddIcon />
                  </Button>
                </Stack>
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
              <Divider className="detail-divider"/>
            </item>
          </Stack>
        </item>
      </Stack>
    </div>
  );
}

export default Detail;
