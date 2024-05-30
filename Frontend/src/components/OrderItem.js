import React from "react";
import { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Stack,
  Button,
} from "@mui/material";
import "../style/orderItems.css";
import { CartContext } from "../context/CartContext";
const steps = ["Commandé", "En préparation", "En cours de livraison", "Livré"];


function OrderItem({ order }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Card style={{ margin: "1rem 0" }} className="order-item">
      <CardContent >
        <Stack direction="row" spacing={2} justifyContent="space-between" className="order-item-title">
          <div>
            <Typography variant="h5" component="div" color="#DCC097">
              Commande # {order.idcommande}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="#DCC097">
              Date de commande: {(new Date(order.date)).toLocaleDateString()}
            </Typography>
          </div>
        </Stack>

        <Stepper activeStep={order.currentStep} alternativeLabel className="order-item-stepper">
          {steps.map((label) => (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stack direction="column" spacing={2} className="order-item-list">
          {order.items.map((item) => (
            <Stack
              key={item.product_id}
              className="order-item-container"
              direction="row"
              spacing={2}
            >
              <item>
              <CardMedia
                component="img"
                className="order-item-image"
                image={item.image}
                alt={item.title}
              />
              </item>
             
              <CardContent className="order-item-cardcontent">
                <Typography component="div" variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="black">
                  Quantité: {item.quantity}
                </Typography>
                <Typography variant="body2" color="black">
                  Prix: {item.item_total_price} €
                </Typography>
                <Stack direction="column" spacing={2} >
                  <Button variant="contained" color="primary" className="order-item-button " onAbort={() => addToCart(item)}>
                    Ajouter au panier
                  </Button>
                </Stack>
              </CardContent>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default OrderItem;
