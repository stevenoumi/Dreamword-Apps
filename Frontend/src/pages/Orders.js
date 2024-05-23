import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { OrderContext } from "../context/OrderContext";
import OderList from "../components/OrderList";

function Favorite() {
  const { orderItems } = useContext(OrderContext);
  
  const title = "Mes commandes"


  return (
    <div className="favorite-back">
      <Header />
      <OderList itle={title} ElementList={orderItems} />
      <Footer />
    </div>
  );
}

export default Favorite;
