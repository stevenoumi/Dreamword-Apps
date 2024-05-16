import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CartProvider } from "./context/CartContext";
import Favorite from "./pages/Favorite";
import { FavoriteProvider } from "./context/FavoriteContext";
import Contact from "./pages/Contact";
import Profile from "./components/Profile";
import Products from "./pages/Products";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/products" component={Products} />
          <Route path="/detail/:id" component={ArticleDetails} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/Cart" component={CartPage} />
          <Route path="/orders" component={Orders} />
        </Router>
      </FavoriteProvider>
    </CartProvider>
  </React.StrictMode>
);
