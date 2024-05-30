import React from "react";
import { Stack } from "@mui/material";
import "../style/favoriteList.css";
import OrderItem from "./OrderItem";

function OrderList({ title, ElementList }) {
  const orderItems = ElementList;

  return (
    <Stack direction="column" spacing={1} className="favorite-container">
      <Stack direction="column" spacing={1} className="favorite-list-container">
        <div className="favorite-list-title">
          <h1>{title}</h1>
        </div>
        <div className="favorite-list-space">
          {orderItems && orderItems.length > 0 ? (
            orderItems.map((order) => (
              <OrderItem key={order.order_id} order={order} />
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </Stack>
    </Stack>
  );
}

export default OrderList;
