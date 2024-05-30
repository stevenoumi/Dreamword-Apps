import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import { OrderContext } from "../context/OrderContext";
import { CartContext } from "../context/CartContext";
import "../style/checkOutForm.css";

const CheckOut = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedBank, setSelectedBank] = useState("");
  const { addToOrder } = useContext(OrderContext);
  const { cartItems, cleanCart } = useContext(CartContext);
  const history = useHistory();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const BankList = [
    {
      text: "Societe generale",
      link: "https://particuliers.sg.fr/icd/cbo/index-authsec.html",
    },
    {
      text: "Banque populaire",
      link: "https://www.banquepopulaire.fr/se-connecter/identifier",
    },
    {
      text: "Banque postale",
      link: "https://www.labanquepostale.fr/",
    },
    {
      text: "Credit agricole",
      link: "https://www.credit-agricole.fr/",
    },
    {
      text: "BNP Paribas",
      link: "https://mabanque.bnpparibas/",
    },
  ];

  const handleProceedPayment = () => {
    const selectedBankLink = BankList.find(
      (bank) => bank.text === selectedBank
    )?.link;
    if (selectedBankLink) {
      alert("Redirecting to your bank's payment gateway...");
      window.location.href = selectedBankLink;
    }
  };

  const getCartItems = () => {
    return cartItems;
  };

  const handleCartpayment = async () => {
    const cartItems = getCartItems();
    const order = {
      id: new Date().getTime(), 
      items: cartItems,
      currentStep: 1, 
      totalAmount: cartItems.reduce((acc, item) => acc + parseInt(item.price, 10), 0),
      dateAdded: new Date().toLocaleDateString(),
      shipping_address: "123, Lorem Ipsum Street, ABC",
      billing_address: "123, Lorem Ipsum Street, ABC",
    };
    addToOrder(order);
    console.log("Order placed successfully", order);
    cleanCart(); 
    history.push("/orders");
  };

  return (
    <div className="checkout-container">
      <Button
        variant="contained"
        component={Link}
        to="/cart"
        className="checkout-back"
      >
        <ArrowBackIosNew />
        Back to Cart
      </Button>
      <Container maxWidth="sm">
        <Box className="checkout-form-container">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card className="checkout-form">
                <CardHeader title="Payment Method" />
                <CardContent>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    className="checkout-tabs"
                  >
                    <Tab
                      icon={<CreditCardIcon />}
                      label="Credit Card"
                      className="checkout-tabs"
                    />
                    <Tab
                      icon={<PaymentIcon />}
                      label="PayPal"
                      className="checkout-tabs"
                    />
                    <Tab
                      icon={<MobileFriendlyIcon />}
                      label="Net Banking"
                      className="checkout-tabs"
                    />
                  </Tabs>

                  <Box hidden={tabValue !== 0} pt={3}>
                    <FormControl onSubmit={(e) => e.preventDefault()}>
                      <TextField
                        fullWidth
                        label="Card Owner"
                        margin="normal"
                        required
                      />
                      <TextField
                        fullWidth
                        label="Card Number"
                        margin="normal"
                        required
                      />
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            label="Expiration Month"
                            margin="normal"
                            type="number"
                            required
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            label="Expiration Year"
                            margin="normal"
                            type="number"
                            required
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        fullWidth
                        label="CVV"
                        margin="normal"
                        required
                        type="password"
                      />
                      <CardActions>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={handleCartpayment}
                          className="checkout-confirm-button"
                        >
                          Confirm Payment
                        </Button>
                      </CardActions>
                    </FormControl>
                  </Box>

                  <Box hidden={tabValue !== 1} pt={3}>
                    <Typography variant="body1" gutterBottom>
                      Select your PayPal account type:
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="domestic"
                        control={<Radio />}
                        label="Domestic"
                      />
                      <FormControlLabel
                        value="international"
                        control={<Radio />}
                        label="International"
                      />
                    </RadioGroup>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<PaymentIcon />}
                      href="https://www.paypal.com/fr/signin"
                      className="checkout-confirm-button"
                    >
                      Log into my PayPal
                    </Button>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                      Note: After clicking on the button, you will be directed
                      to a secure gateway for payment. After completing the
                      payment process, you will be redirected back to the
                      website to view details of your order.
                    </Typography>
                  </Box>

                  <Box hidden={tabValue !== 2} pt={3}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Select your Bank</InputLabel>
                      <Select
                        value={selectedBank}
                        onChange={handleBankChange}
                      >
                        <MenuItem value="">
                          <em>--Please select your Bank--</em>
                        </MenuItem>
                        {BankList.map((item) => (
                          <MenuItem key={item.text} value={item.text}>
                            {item.text}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<MobileFriendlyIcon />}
                      onClick={handleProceedPayment}
                      className="checkout-confirm-button"
                      component={Link}
                      to="/orders"
                    >
                      Proceed Payment
                    </Button>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                      Note: After clicking on the button, you will be directed
                      to a secure gateway for payment. After completing the
                      payment process, you will be redirected back to the
                      website to view details of your order.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CheckOut;
