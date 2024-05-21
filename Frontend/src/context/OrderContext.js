import React, { createContext, useState } from "react";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [OrderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    const isAlreadyInOrders = OrderItems.some(
      (OrderItem) => OrderItem.id === item.id
    );
    if (!isAlreadyInOrders) {
      const now = new Date();
      const formattedDate = `${("0" + now.getDate()).slice(-2)}/${(
        "0" +
        (now.getMonth() + 1)
      ).slice(-2)}/${now.getFullYear()}`;
      setOrderItems([
        ...OrderItems,
        { ...item, dateAdded: formattedDate },
      ]);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        OrderItems,
        addToOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext };
