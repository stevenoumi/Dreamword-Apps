import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { OrderContext } from "../context/OrderContext";
import OrderList from "../components/OrderList";

function OrderPages() {
  const { orderItems, getUserOrders } = useContext(OrderContext);

  useEffect(() => {
    getUserOrders();
  }, [getUserOrders]);

  console.log(orderItems);

  const title = "Mes commandes";

  return (
    <div className="favorite-back">
      <Header />
      <OrderList title={title} ElementList={orderItems} />
      <Footer />
    </div>
  );
}

export default OrderPages;
