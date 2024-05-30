import React, { createContext, useState } from 'react';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = async (order) => {
    try {
      const response = await fetch('http://localhost:5000/orders/addorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(order)
      });

      if (!response.ok) {
        throw new Error('Failed to add order');
      }

      // Fetch user orders after adding the new order
      await getUserOrders();
    } catch (error) {
      console.error('Error adding order:', error.message);
    }
  };

  const getUserOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/orders/userorders', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user orders');
      }

      const data = await response.json();
      setOrderItems(data); // Ensure it's an array
    } catch (error) {
      console.error('Error fetching user orders:', error.message);
    }
  };

  // Exposer les fonctions addToOrder et getUserOrders
  // dans la valeur du contexte
  const contextValue = {
    orderItems,
    addToOrder,
    getUserOrders
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext };
