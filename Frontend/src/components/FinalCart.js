import {
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState, useMemo } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import "../style/finalCart.css";
import FinalCartItems from "./FinalCartItems";
import "../style/header.css";
import { Link } from "react-router-dom";
import "../style/cart.css";
import { CartContext } from "../context/CartContext";

function FinalCart() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { cartItems } = useContext(CartContext);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const discountRate = 0.05; // 5% discount
  const discount = totalPrice * discountRate;
  const shippingFee = 10; // Fixed shipping fee
  const finalShippingPrice = totalPrice + shippingFee - discount;
  const finalPrice = selectedTab === 1 ? finalShippingPrice : totalPrice - discount;

  const shippingModeList = [
    {
      text: "à emporter",
      icon: <ShoppingBagIcon />,
      description: "Recupererez votre commande en magasin.",
      frais_de_livraison: false,

    },
    {
      text: "Livraison à domicile",
      icon: <DeliveryDiningIcon />,
      description: "Votre commande sera livrée  à votre adresse.",
      frais_de_livraison: true,
      prix_de_livraison: 10,
    },
    {
      text: "Réserver une table",
      icon: <RestaurantMenuIcon />,
      description: "Réservez une table dans notre restaurant.",
      frais_de_livraison: false,

    },
  ];

  return (
    <Stack direction="row" className="finalcart-container">
      <div className="finalcart-cart-container">
        <Stack direction="column">
          <div className="finalcart-title">
            <Typography variant="h4" fontFamily={'Times New Roman'}>Panier</Typography>
            <Typography variant="subtitle1" fontFamily={'Times New Roman'}>{totalItems} articles</Typography>
          </div>
          <div>
            <Divider color="#DCC097" />
          </div>
          <div className="finalcart-articles">
            <div className="cart-list">
              {cartItems.map((item) => (
                <FinalCartItems key={item.id} item={item} />
              ))}
            </div>
          </div>
          <Button className="final-cart-back" component={Link} to="/products">
            <ArrowBackIcon /> Retour à la boutique
          </Button>
        </Stack>
      </div>
      <div className="finalcart-summary-container">
        <Stack direction="column" spacing={2}>
          <div className="finalcart-summary-title">
            <Typography variant="h4" fontFamily={'Times New Roman'}>Résumé</Typography>
          </div>
          <div className="finalcart-indication-title">
            <Typography variant="body1" fontFamily={'Times New Roman'}>Articles: {totalItems}</Typography>
            <Typography variant="body1" fontFamily={'Times New Roman'}>{totalPrice.toFixed(2)} €</Typography>
          </div>
          <div className="finalcart-indication-title">
            <Typography variant="body1" fontFamily={'Times New Roman'}> Mode de livraison : </Typography>
          </div>
          <Stack
            direction="column"
            spacing={2}
            className="finalcart-summary-shipping"
          >
            <div className="finalcart-summary-tab-selector ">
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                size="small"
                fontFamily={'Times New Roman'}
              >
                {shippingModeList.map((mode, index) => (
                  <Tab key={mode.text} icon={mode.icon} label={mode.text} />
                ))}
              </Tabs> 
            </div>
            <Typography variant="body1" fontFamily={'Times New Roman'} className="finalcart-indication-title" color="red">
              {shippingModeList[selectedTab].description}
            </Typography>
            <div>
              <Typography variant="body1" fontFamily={'Times New Roman'}>Code de réduction</Typography>
            </div>
            <div className="finalcart-summary-select">
              <TextField
                id="discount-code"
                label="Entrez votre code de réduction"
                variant="outlined"
                className="finalcart-textfield"
                size="small"

              />
            </div>
            {selectedTab === 1 && (
              <>
                <div>
                  <Typography fontFamily={'Times New Roman'} variant="body1">Choisir une autre adresse de livraison : </Typography>
                </div>
                <div className="finalcart-summary-select">
                  <TextField
                    id="shipping-address"
                    label="Entrez votre adresse de livraison"
                    variant="outlined"
                    className="finalcart-textfield"
                    size="small"
                  />
                </div>
              </>
            )}
          </Stack>
          <Divider />
          <div className="finalcart-indication-title">
            <Typography fontFamily={'Times New Roman'} variant="body1">Prix total</Typography>
            <Typography fontFamily={'Times New Roman'} variant="body1">{finalPrice.toFixed(2)} €</Typography>
          </div>
          {shippingModeList[selectedTab].frais_de_livraison && (
            <div className="finalcart-indication-title">
              <Typography fontFamily={'Times New Roman'} variant="body1">Frais de livraison</Typography>
              <Typography fontFamily={'Times New Roman'} variant="body1">{shippingModeList[selectedTab].prix_de_livraison.toFixed(2)} €</Typography>
            </div>
          )}
          <div className="finalcart-indication-title">
            <Typography fontFamily={'Times New Roman'} variant="body1">Réduction</Typography>
            <Typography fontFamily={'Times New Roman'} variant="body1">-{discount.toFixed(2)} €</Typography>
          </div>
          <Divider />
          <div className="finalcart-summary-select">
            <Button
              variant="outlined"
              component={Link}
              to="/payement"
              className="finalcart-button"
              fontFamily={'Times New Roman'}
            >
              Procéder au paiement
            </Button>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

export default FinalCart;
