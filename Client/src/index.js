import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CartProvider } from "./context/CartContext";
import Favorite from "./pages/Favorite";
import { FavoriteProvider } from "./context/FavoriteContext";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={ArticleDetails} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </FavoriteProvider>
    </CartProvider>
  </React.StrictMode>
);
