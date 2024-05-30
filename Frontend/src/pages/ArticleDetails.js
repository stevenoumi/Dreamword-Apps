import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Detail from "../components/Details";
import { useParams } from "react-router-dom";

function ArticleDetails() {
  const { id } = useParams();
  const itemId = parseInt(id);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products/products/${itemId}`
        );
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des détails du produit"
          );
        }
        const productData = await response.json();
        setSelectedItem(productData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du produit:",
          error
        );
      }
    };

    fetchProductDetail();
  }, [itemId]);

  if (!selectedItem) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <Header />
      <Detail selectedItem={selectedItem} />
    </div>
  );
}

export default ArticleDetails;
