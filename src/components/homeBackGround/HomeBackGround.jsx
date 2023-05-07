import React from "react";
import "./HomeBackGround.css";
import { Box, Typography } from "@mui/material";
const HomeBackGround = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100%",
        }}
      >
        <source src="nebula.webm" type="video/webm" />
      </video>
    </Box>
  );
};

export default HomeBackGround;
