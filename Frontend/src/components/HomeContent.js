import {  CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "../style/homeContent.css";
import '../style/embla.css'
import '../style/caroussel.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export const HomeContent = () => {
  return (
    <>
      <Stack spacing={2} direction="column" className="homecontent-container">
        <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} width="100%" height="100%" />

        </div>
        <div>
          <Stack spacing={5} direction="row" className="homecontent-firststack">
            <div className="homecontent-image-container">
              <CardMedia
                component="img"
                src="http://localhost:5000/images/burger-grid.png"
                alt="DreamWorld"
                className="homecontent-image"
              />
            </div>
            <div className="homecontent-Advertisement">
              <Stack spacing={3} direction="column">
                <Typography variant="h1">
                  {" "}
                  Le meilleur Burger de France{" "}
                </Typography>
                <Typography variant="h6">
                  {" "}
                  Tous nos produits sont fabriqués de façon artisanale avec des
                  produits frais et de qualité.{" "}
                </Typography>
                <Typography variant="h6">
                  {" "}
                  Frites maison, sauces maison, pains boulanger, viande de bœuf
                  fraiche et française. Nos fromages sont pour la plupart au
                  lait cru.{" "}
                </Typography>
                <Typography variant="h5">
                  <CardMedia
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
        <div>
          <Stack spacing={5} direction="row" className="homecontent-firststack">
            <div className="homecontent-Advertisement">
              <Stack spacing={3} direction="column">
                <Typography variant="h1"> LE Coffee shop </Typography>
                <Typography variant="h6">
                  {" "}
                  Pour vous et préparés à la commande : smoothies, citronnades,
                  thés glacés frappés.{" "}
                </Typography>
                <Typography variant="h6">
                  {" "}
                  Nos restaurants vous accueillent tout au long de votre journée
                  pour vous faire passer un agréable moment.{" "}
                </Typography>
                <Typography variant="h3" spacing={3}>
                  <CardMedia
                    component="img"
                    src="http://localhost:5000/images/heart.png"
                    alt="DreamWorld"
                    sx={{ width: "100px" }}
                  />
                  just for you
                </Typography>
              </Stack>
            </div>
            <div className="homecontent-image-container">
              <CardMedia
                component="img"
                src="http://localhost:5000/images/drinks-grid.png"
                alt="DreamWorld"
                className="homecontent-image"
              />
            </div>
          </Stack>
        </div>
        <div className="homecontent-text">
          <Typography variant="h1"> Passez votre commande En ligne </Typography>
        </div>
      </Stack>
    </>
  );
};

export default HomeContent;
