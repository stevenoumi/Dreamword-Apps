
import {  Stack } from "@mui/material";
import FavoriteItem from "./FavoriteItems";
import "../style/favoriteList.css";

function FavoriteList({title , ElementList}) {
  const  favoriteItems= ElementList

  return (
      <Stack direction="column" spacing={1} className="favorite-container">
          <Stack direction="column" spacing={1} className="favorite-list-container">
              <div className="favorite-list-title">
                  <h1> {title} </h1>
              </div>
              <div className="favorite-list-space">
                  {favoriteItems.map((item) => (
                      <FavoriteItem key={item.id} item={item} />
                  ))}
              </div>
          </Stack>
      </Stack>
  );
}

export default FavoriteList;
