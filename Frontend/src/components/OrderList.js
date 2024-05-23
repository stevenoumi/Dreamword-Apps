
import React from "react";
import {  Stack } from "@mui/material";
import "../style/favoriteList.css";
import OrderItem from "./OrderItem";

function OderList({title , ElementList}) {

    const orderItems = ElementList;

  return (
      <Stack direction="column" spacing={1} className="favorite-container">
          <Stack direction="column" spacing={1} className="favorite-list-container">
              <div className="favorite-list-title">
                  <h1> Mes Commandes </h1>
              </div>
              <div className="favorite-list-space">
                  {orderItems.map((order) => (
                      <OrderItem key={order.id} order={order} />
                  ))}
              </div>
          </Stack>
      </Stack>
  );
}

export default OderList;
