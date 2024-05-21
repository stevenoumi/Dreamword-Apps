import "../style/App.css";
import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteList from "../components/FavoriteList";
import { FavoriteContext } from "../context/FavoriteContext";

function Favorite() {
  const { favoriteItems } = useContext(FavoriteContext);
  const title = "Mes Favoris"


  return (
    <div className="favorite-back">
      <Header />
      <FavoriteList title={title} ElementList={favoriteItems} />
      <Footer />
    </div>
  );
}

export default Favorite;
