import '../style/App.css';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/Details';
import { useParams } from 'react-router-dom';



function ArticleDetails() {
  const { id } = useParams();
  const itemId = parseInt(id);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les détails du produit
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/1`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des détails du produit');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du produit:', error);
      }
    };

    // Appel de la fonction pour récupérer les détails du produit
    fetchProductDetail();
  }, [itemId]);


  // Si les détails du produit n'ont pas encore été chargés, affichez un message de chargement
  if (!product) {
    return <div>Chargement en cours...</div>;
  }


  return (
    <div>
      <Header/>
      <Details selectedItem={product}/>
      <Footer/>
    </div>
  );
}

export default ArticleDetails;
