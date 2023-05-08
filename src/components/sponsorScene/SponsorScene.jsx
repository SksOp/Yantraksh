import React, { useRef, useEffect } from "react";
import "./SponsorScene.css";
import { sponsorData } from "../../assets/sponsorData";
import CardRendered from "../cardRenderer/CardRendered";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import { useMediaQuery, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import VideoBG from "../utils/VideoBG";
import robot from "../../assets/robot.webm";
import robotPoster from "../../assets/robotposter.jpg";
import Selector from "./utils/Selector";
import Renderer from "./utils/Renderer";
const SponsorScene = () => {
  const isDesktop = useMediaQuery("(min-width: 850px)");
  const [selectedSponsor, setSelectedSponsor] = React.useState(0);
  const [isRendererActive, setIsRendererActive] = React.useState(false);
  const [isSelectorActive, setIsSelectorActive] = React.useState(true);

  const seletorProp = {
    isSelectorActive,
    setIsSelectorActive,
    isRendererActive,
    setIsRendererActive,
    setSelectedSponsor,
  };
  const rendererProp = { isRendererActive, selectedSponsor };
  return (
    <FlexCenteredColumn
      height={"100vh"}
      width={"100%"}
      sx={{ justifyContent: "flex-end" }}
    >
      <FlexCenteredRow zIndex={3} width={"100%"} height={"60%"} mb={"3rem"}>
        <Selector {...seletorProp} />
        {isDesktop && <Renderer {...rendererProp} />}
      </FlexCenteredRow>
      <VideoBG
        videoUrl={robot}
        videoType={"webm"}
        poster={robotPoster}
        width={"110%"}
        restrictWidth={false}
        addNoise={true}
      />
    </FlexCenteredColumn>
  );
};

export default SponsorScene;
