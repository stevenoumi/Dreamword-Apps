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
import Profile from "./components/Profile";
import Products from "./pages/Products";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Orders";
import ContactPage from "./pages/ContactPage";
import PayementPage from "./pages/PayementPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { OrderProvider } from "./context/OrderContext";
import Reviews from "./pages/Reviews";
import { ReviewProvider } from "./context/ReviewContext";
import '@fontsource/sacramento';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReviewProvider>
      <OrderProvider>
        <CartProvider>
          <FavoriteProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/detail/:id" component={ArticleDetails} />
                <Route path="/favorites" component={Favorite} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/Cart" component={CartPage} />
                <Route path="/orders" component={Orders} />
                <Route path="/payement" component={PayementPage} />
                <Route path="/review/:id" component={Reviews} />
                <Route path='/admin' component={AdminPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </FavoriteProvider>
        </CartProvider>
      </OrderProvider>
    </ReviewProvider>
  </React.StrictMode>
);
