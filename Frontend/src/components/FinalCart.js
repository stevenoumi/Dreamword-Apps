import {
  Button,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  Stack,
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
import { icon } from "leaflet";

function FinalCart() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { cartItems } = useContext(CartContext);

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
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
  const finalPrice = totalPrice + shippingFee - discount;

  const shippingModeList = [
    {
      text: "à empoter",
      icon: <ShoppingBagIcon />,
    },
    {
      text: "  Livrason à domicile",
      icon: <DeliveryDiningIcon />,
    },
    {
      text: "   reserver une table",
      icon: <RestaurantMenuIcon />,
    },
  ];

  return (
    <Stack direction="row" className="finalcart-container">
      <div className="finalcart-cart-container">
        <Stack direction="column">
          <div className="finalcart-title">
            <Typography variant="h4">Panier</Typography>
            <Typography variant="subtitle1">{totalItems} articles</Typography>
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
            <Typography variant="h4">Summary</Typography>
          </div>
          <div className="finalcart-indication-title">
            <Typography variant="body1">Articles: {totalItems}</Typography>
            <Typography variant="body1">{totalPrice.toFixed(2)} €</Typography>
          </div>
          <div className="finalcart-indication-title">
            <Typography variant="body1">Expédition</Typography>
            <Typography variant="body1">{shippingFee.toFixed(2)} €</Typography>
          </div>
          <div className="finalcart-summary-select">
            <Select
              labelId="payment-method-select-label"
              id="payment-method-select"
              value={paymentMethod}
              onChange={handleChange}
              className="finalcart-textfield"
              size="small"
            >
              <MenuItem value="">
                <em>--Please select your shipping Mode--</em>
              </MenuItem>
              {shippingModeList.map((item) => (
                <MenuItem key={item.text} value={item.text} className="finalcart-shoppindmode">
                  {item.icon}
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <Typography variant="body1">Code de réduction</Typography>
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
          <div>
            <Typography variant="body1">Adresse de livraison</Typography>
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
          <Divider />
          <div className="finalcart-indication-title">
            <Typography variant="body1">Prix total</Typography>
            <Typography variant="body1">{finalPrice.toFixed(2)} €</Typography>
          </div>
          <div className="finalcart-indication-title">
            <Typography variant="body1">Frais de livraison</Typography>
            <Typography variant="body1">{shippingFee.toFixed(2)} €</Typography>
          </div>
          <div className="finalcart-indication-title">
            <Typography variant="body1">Réduction</Typography>
            <Typography variant="body1">-{discount.toFixed(2)} €</Typography>
          </div>
          <Divider />
          <div className="finalcart-summary-select">
            <Button variant="outlined" href="/payement" className="finalcart-button">
              Proceder au payement
            </Button>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

export default FinalCart;
