import React from "react";
import "./Renderer.css";
import { useMediaQuery } from "@mui/material";
import rendererDesktop from "../../../assets/rendererDesktop.png";
import { Box } from "@mui/material";
import { sponsorData } from "../../../assets/sponsorData";

const Renderer = ({ isRendererActive, selectedSponsor }) => {
  const isDesktop = useMediaQuery("(min-width: 850px)");
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${rendererDesktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backdropFilter: "blur(7px)",
        }}
        width={"60%"}
        height={"100%"}
        mr={isDesktop ? "auto" : "unset"}
        display={"relative"}
      ></Box>
    </>
  );
};

export default Renderer;
