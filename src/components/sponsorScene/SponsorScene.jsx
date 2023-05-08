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
import MobDetailHub from "./utils/MobDetailHub";
import { TextHeading } from "../homeBackGround/HomeBackGround";
const SponsorScene = () => {
  const isDesktop = useMediaQuery("(min-width: 850px)");
  const [selectedSponsor, setSelectedSponsor] = React.useState(0);
  const [isSelectorActive, setIsSelectorActive] = React.useState(true);

  const seletorProp = {
    isSelectorActive,
    setIsSelectorActive,
    setSelectedSponsor,
    selectedSponsor,
  };
  const rendererProp = {
    selectedSponsor,
    isSelectorActive,
    setIsSelectorActive,
  };
  return (
    <FlexCenteredColumn
      height={"100vh"}
      width={"100%"}
      sx={{ justifyContent: "flex-start" }}
      padding={"3rem 0"}
      gap={"2rem"}
    >
      {" "}
      <FlexCenteredRow height={isDesktop ? "40%" : "20%"}>
        <TextHeading />
      </FlexCenteredRow>
      <FlexCenteredRow
        zIndex={3}
        width={"100%"}
        height={"60%"}
        mb={isDesktop ? "3rem" : "0"}
        position={"relative"}
      >
        {isDesktop && (
          <>
            <Selector {...seletorProp} />
            <Renderer {...rendererProp} />
          </>
        )}
        {!isDesktop && (
          <>
            {isSelectorActive && <Selector {...seletorProp} />}
            {!isSelectorActive && <MobDetailHub {...rendererProp} />}
          </>
        )}
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
