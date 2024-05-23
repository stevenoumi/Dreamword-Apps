
import { createContext, useState } from "react";
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const OrderContext = createContext();
const generateRandomItems = (numItems) => {
  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push({
      id: i,
      name: `Article ${i + 1}`,
      quantity: getRandomInt(1, 5),
      price: getRandomInt(10, 100),
      image: itemImages[getRandomInt(0, itemImages.length - 1)],
    });
  }
  return items;
};

const itemImages = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
];

// Génération d'articles de commande aléatoires


// Génération de commandes aléatoires
const generateRandomOrders = (numOrders) => {
  const orders = [];
  for (let i = 0; i < numOrders; i++) {
    const now = new Date();
    const formattedDate = `${("0" + now.getDate()).slice(-2)}/${(
      "0" + (now.getMonth() + 1)
    ).slice(-2)}/${now.getFullYear()}`;
    orders.push({
      id: i,
      dateAdded: formattedDate,
      currentStep: getRandomInt(0, 3),
      items: generateRandomItems(getRandomInt(1, 5)),
    });
  }
  return orders;
};
function OrderProvider ({ children }) {
  const [orderItems, setOrderItems] = useState(generateRandomOrders(5));

  const addToOrder = (item) => {
    const isAlreadyInOrders = orderItems.some(
      (orderItem) => orderItem.id === item.id
    );
    if (!isAlreadyInOrders) {
      const now = new Date();
      const formattedDate = `${("0" + now.getDate()).slice(-2)}/${(
        "0" + (now.getMonth() + 1)
      ).slice(-2)}/${now.getFullYear()}`;
      setOrderItems([
        ...orderItems,
        { ...item, dateAdded: formattedDate },
      ]);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        addToOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
