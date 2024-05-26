import React, { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorite = async (item) => {
    console.log("Les éléments ont été ajoutés aux favoris avec succès.", item);
    try {
      const token = localStorage.getItem("token");
      const apiUrl = "http://localhost:5000/favorites/add-favorite";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de l'ajout des favoris: ${response.statusText}`);
      }
      if (favoriteItems.some(favoriteItem => favoriteItem.product_id === item.product_id)) {
        console.log("L'élément est déjà dans les favoris.");
        throw new Error("L'élément est déjà dans les favoris.");
      }else {
      setFavoriteItems(prevItems => [...prevItems, item]);
      console.log("Les éléments ont été ajoutés aux favoris avec succès.");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout des favoris:", error);
    }
  };

  const removeFromFavorite = async (item) => {
    console.log("l'element a été supprimé des favoris avec succès.", item);
    try {
      const token = localStorage.getItem("token");
      const apiUrl = `http://localhost:5000/favorites/delete-favorite/${item.product_id}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression de l'élément des favoris: ${response.statusText}`);
      }

      setFavoriteItems(prevItems => prevItems.filter(favoriteItem => favoriteItem.product_id!== item.product_id));
      console.log(`L'élément avec l'ID ${item.product_id} a été supprimé des favoris avec succès.`);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'élément des favoris:", error);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("token");
        const apiUrl = `http://localhost:5000/favorites/get-favorites`;
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const favorites = await response.json();
          setFavoriteItems(favorites);
          console.log("Les favoris ont été mis à jour avec succès.");
        } else {
          throw new Error(`Erreur lors de la récupération des favoris: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des favoris:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addToFavorite, removeFromFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
