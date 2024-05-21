// Products.js
import "../style/App.css";
import React, { useEffect, useState } from "react";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";
import SmallHeader from "../components/SmallHeader";
import SmallNavBar from "../components/SmallNavBar";

function Products() {

  const [selectedItem, setSelectedItem] = useState('');


  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:5000/${selectedItem}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProductsList(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
  }, [selectedItem]);

  return (
    <div>
      <SmallHeader />
      <SmallNavBar handleClick={handleClick} selectedItem={selectedItem} />
      <ShoppingList productsList={productsList} selectedItem={selectedItem} />
      <Footer />
    </div>
  );
}

export default Products;
