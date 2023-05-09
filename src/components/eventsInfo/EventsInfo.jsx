import React from "react";
import "./EventsInfo.css";
import { Box, Typography, alpha, useMediaQuery } from "@mui/material";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import FlexLeftColumn from "../../muiStyled/FlexLeftColumn";
import data from "../../assets/eventData";
import { videoUrl } from "../../assets/videoUrl";
import machinePoster from "../../assets/machine.jpg";
import VideoBG from "../utils/VideoBG";
import rendererDesktop from "../../assets/rendererDesktop.png";
import {
  TextHeading,
  TextHeadingContainer,
} from "../homeBackGround/HomeBackGround";
import { ButtonComp } from "../eventScene/utils/FlexTable";
import FlexLeftRow from "../../muiStyled/FlexLeftRow";

const EventsInfo = ({ id }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const activeData = data.filter((item) => item.id === id)[0];

  console.log(activeData);
  return (
    <>
      <FlexCenteredColumn
        width={"100%"}
        zIndex={1}
        sx={{
          justifyContent: "flex-start",
        }}
        height={"100vh"}
      >
        <FlexCenteredColumn
          height={"30%"}
          sx={{
            justifyContent: "center",
            paddingTop: "2rem",
          }}
          width="100%"
        >
          <TextHeading />
        </FlexCenteredColumn>
        <FlexLeftColumn width={"100%"} zIndex={3} p="3rem" height={"70%"}>
          <FlexLeftColumn
            height={"100%"}
            gap={"1rem"}
            overflow={"auto"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <FlexLeftRow width={"100%"} flexWrap={"wrap"} gap={"1.5rem"}>
              <Typography variant="h1" color={"#fff"}>
                {activeData.heading}
              </Typography>
              <ButtonComp
                url={activeData.formUrl}
                title={"Register Here"}
                isBlanck
              />
            </FlexLeftRow>
            <FlexLeftRow width={"100%"} flexWrap={"wrap"}>
              <Typography variant="h5" color={alpha("#fff", 0.5)}>
                {activeData.description}
              </Typography>
            </FlexLeftRow>

            {activeData.longDescription.map((item, index) => {
              return <LongDescription key={index + "desc"} data={item} />;
            })}
          </FlexLeftColumn>
        </FlexLeftColumn>
      </FlexCenteredColumn>

      <BgDesign />
      <VideoBG
        restrictWidth={false}
        videoUrl={videoUrl.machineFace}
        poster={machinePoster}
        videoType={"webm"}
      />
    </>
  );
};

export default EventsInfo;

const BgDesign = () => {
  return (
    <Box
      zIndex={1}
      sx={{
        backgroundImage: `url(${rendererDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backdropFilter: "blur(7px)",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      width={"100vw"}
      height={"70vh"}
      position={"fixed"}
      bottom={"0"}
      left={"0"}
      overflow={"auto"}
      borderRadius={"30px"}
    ></Box>
  );
};

const LongDescription = ({ data }) => {
  return (
    <FlexLeftRow width={"100%"} flexWrap={"wrap"}>
      <Typography variant="h5" color={alpha("#fff", 1)}>
        {data}
      </Typography>
    </FlexLeftRow>
  );
};
