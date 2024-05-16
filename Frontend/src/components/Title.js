import React from "react";
import { Stack, Typography } from "@mui/material";
import "../style/title.css";

function Title({ title, backgroundColor, textColor }) {
  const titleStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <>
      <Stack
        direction="row"
        className="title-container"
        style={titleStyle}
      >
        <Typography variant="h4" component="div" className="title-word">
          {title}
        </Typography>
      </Stack>
    </>
  );
}
export default Title;
