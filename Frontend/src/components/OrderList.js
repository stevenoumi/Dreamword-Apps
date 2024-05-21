
import React, { useContext } from "react";
import {  Stack } from "@mui/material";
import OrederItem from "./OrederItems";
import "../style/OrederList.css";
import { OrederContext } from "../context/OrederContext";

function OrederList() {
  const { orederItems } = useContext(OrederContext); 

  return (
      <Stack direction="column" spacing={1} className="Oreder-container">
          <Stack direction="column" spacing={1} className="Oreder-list-container">
              <div className="Oreder-list-title">
                  <h1>Votre liste de favoris</h1>
              </div>
              <div className="Oreder-list-space">
                  {orederItems.map((item) => (
                      <OrederItem key={item.id} item={item} />
                  ))}
              </div>
          </Stack>
      </Stack>
  );
}

export default OrederList;
