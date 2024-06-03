import React from "react";
import { Button, CardMedia, Stack, Typography } from "@mui/material";
import "../style/homeContent.css";
import '../style/slides.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

function Slides({ item }) {

  return (
    <div>
      <Stack spacing={5} direction="row" className="slide-container">
        <div className="slide-image-container">
          <CardMedia
            component="img"
            src={item.image}
            alt="DreamWorld"
            className="slide-image"
          />
        </div>
        <div className="slide-advertisement-container">
          <Stack spacing={3} direction="column">
            <Typography variant="h1">
              {item.title}
            </Typography>
            <Typography variant="h6">
              {item.description.split('\n').map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
            <Button component={Link} to="/produc" variant="contained" color="inherit" sx={{ width: "200px", backgroundColor: "#DCC098" }} >
              Profitez de l'offre
            </Button>
            <Typography variant="h5">
              <img
                component="img"
                src="http://localhost:5000/images/burger-croque.png"
                alt="DreamWorld"
                sx={{ width: "100px" }}
              />
              let's make your dream come true
            </Typography>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
export default Slides;