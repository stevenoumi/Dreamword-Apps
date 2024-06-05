import {  CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "../style/homeContent.css";
import '../style/embla.css'

const OPTIONS = { loop: true }
const slides =
[

  {
    "image": "http://localhost:5000/images/welcome.png",
    "title": "Première Commande",
    "description": "Nouvel utilisateur ? \n  Bénéficiez d'une réduction spéciale sur votre première commande en ligne. \n Cliquez sur le bouton suivant et profitez de 10% de réduction sur votre premier achat. \n Nous avons hâte de vous servir nos délicieux burgers \n promoCode : WELCOME",
  },
  {
    "image": "http://localhost:5000/images/2003.png",
    "title": "Nouvelle Saveur",
    "description": "Essayez notre nouveau Burger exclusif à un prix spécial de lancement. Nous avons ajouté une nouvelle saveur à notre menu et nous voulons que vous soyez les premiers à la découvrir. Ne manquez pas cette chance de goûter à quelque chose de nouveau et d'excitant. \n promoCode: NEWFLAVOR"
  },
  {
    "image": "http://localhost:5000/images/student.png",
    "title": "Menu Étudiant",
    "description": "Étudiants, c'est votre chance de profiter de nos délicieux burgers à prix réduit. Présentez votre carte d'étudiant et bénéficiez d'une réduction spéciale sur notre Menu Étudiant. Idéal pour une pause déjeuner rapide et économique entre les cours. \n promoCode: STUDENT10"
  },
  {
    "image": "http://localhost:5000/images/freedelivery.png",
    "title": "Livraison Gratuite",
    "description": "Profitez de la livraison gratuite pour toutes les commandes supérieures à 30€. Commandez vos plats préférés depuis le confort de votre maison et faites-vous livrer sans frais supplémentaires \n promoCode: FREEDELIVERY",
  },
  {
    "image": "http://localhost:5000/images/cartegift.png",
    "title": "Cartes-Cadeaux",
    "description": "Offrez le cadeau parfait avec nos cartes-cadeaux. Payez 20€ et recevez une carte-cadeau de 25€, idéale pour les amis et la famille. Nos cartes-cadeaux sont valables sur tous les produits de notre menu. Un cadeau qui fera toujours plaisir \n promoCode: GIFTCARD",
  }
]

export const HomeContent = () => {
  return (
    <>
      <Stack spacing={2} direction="column" className="homecontent-container">
        <div className="caroussel-container">
        <EmblaCarousel slides={slides} options={OPTIONS} width="100%" height="100%" />

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
