import React, { createContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorite = (item) => {
    const isAlreadyInFavorites = favoriteItems.some(
      (favoriteItem) => favoriteItem.id === item.id
    );
    if (!isAlreadyInFavorites) {
      const now = new Date();
      const formattedDate = `${("0" + now.getDate()).slice(-2)}/${(
        "0" +
        (now.getMonth() + 1)
      ).slice(-2)}/${now.getFullYear()}`;
      setFavoriteItems([
        ...favoriteItems,
        { ...item, dateAdded: formattedDate },
      ]);
    }
  };

  const removeFromFavorite = (itemId) => {
    setFavoriteItems((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== itemId)
    );
  };

  const cleanFavorite = () => {
    setFavoriteItems([]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
        cleanFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
