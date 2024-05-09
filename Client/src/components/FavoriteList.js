import React, { useContext } from "react";
import {  Stack } from "@mui/material";
import FavoriteItem from "./FavoriteItems";
import "../style/favoriteList.css";
import { FavoriteContext } from "../context/FavoriteContext";


function FavoriteList() {

    const { favoriteItems } = useContext(FavoriteContext); 
   // const { cleanFavorite } = useContext(FavoriteContext);
    console.log(favoriteItems);
  
  return (
    <>
    
    <Stack direction="column" spacing={1} className="favorite-list">
      <item>
          {favoriteItems.map((item) => (
            <FavoriteItem key={item.id} item={item} />
          ))}
      </item>
    </Stack>
    </>
  );

}

export default FavoriteList;