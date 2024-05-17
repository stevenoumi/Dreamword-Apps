import "../style/App.css";
import React, { useEffect, useState } from "react";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";
import SmallHeader from "../components/SmallHeader";
import SmallNavBar from "../components/SmallNavBar";

function Products() {

  const handleNavbarSelection = (event) => {
    //recuperer l'item selectionné
    const itemSelected = event.target.textContent;
    //recuperer le nom de l'item selectionné
    console.log(itemSelected);
    return itemSelected;
  };
  const [productsList, setProductsList] = useState([]);

    useEffect(() => {
      //fetch data from the backend server with the url categories
        fetch('http://localhost:5000')
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
                console.error('Erreur lors de la récupération des vêtements:', error);
            });
    }, []);

  return (
    <div>
      <SmallHeader />
      <SmallNavBar  handleNavbarSelection={ handleNavbarSelection } />
      <ShoppingList productsList={productsList}/>
      <Footer />
    </div>
  );
}

export default Products;
