import "../style/App.css";
import React, { useEffect, useState } from "react";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";
import SmallHeader from "../components/SmallHeader";
import SmallNavBar from "../components/SmallNavBar";

function Products() {
  const [selectedItem, setSelectedItem] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // État pour le tri
  const [productsList, setProductsList] = useState([]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  useEffect(() => {
    let url = selectedItem 
      ? `http://localhost:5000/products/categories/${selectedItem.category_id}/products`
      : `http://localhost:5000/products/allproducts`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let sortedData = data;
        if (sortOrder === 'asc') {
          sortedData = data.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
          sortedData = data.sort((a, b) => b.price - a.price);
        } else if (sortOrder === 'rating') {
          sortedData = data.sort((a, b) => b.rating - a.rating); // Tri par note décroissante
        }
        setProductsList(sortedData);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
  }, [selectedItem, sortOrder]); // Ajouter sortOrder comme dépendance

  return (
    <div>
      <SmallHeader />
      <SmallNavBar handleClick={handleClick} selectedItem={selectedItem} handleSortChange={handleSortChange} />
      <ShoppingList productsList={productsList} selectedItem={selectedItem} />
      <Footer />
    </div>
  );
}

export default Products;
