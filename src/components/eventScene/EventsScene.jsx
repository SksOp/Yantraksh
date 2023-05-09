import React from "react";
import VideoBG from "../utils/VideoBG";
import { useMediaQuery } from "@mui/material";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import EventTable from "./utils/EventTable";
import { TextHeading } from "../homeBackGround/HomeBackGround";
import { videoUrl } from "../../assets/videoUrl";
import city from "../../assets/city.jpg";
import data from "../../assets/eventData";

const EventsScene = () => {
  const isDesktop = useMediaQuery("(min-width: 850px)");

  return (
    <>
      <FlexCenteredColumn
        height={"100vh"}
        width={"100%"}
        sx={{ justifyContent: "flex-start" }}
        padding={"3rem 0"}
        gap={"2rem"}
        overflow={"auto"}
      >
        {" "}
        <FlexCenteredRow height={isDesktop ? "40%" : "20%"}>
          <TextHeading />
        </FlexCenteredRow>
        <FlexCenteredRow
          zIndex={2}
          width={"100%"}
          height={"60%"}
          mb={"33rem"}
          flexWrap={"wrap"}
        >
          {data.map((row, rowIndex) => {
            return <EventTable data={row} />;
          })}
        </FlexCenteredRow>
        <VideoBG
          videoUrl={videoUrl.city}
          videoType={"webm"}
          poster={city}
          width={"100%"}
          restrictWidth={false}
          addNoise={true}
        ></VideoBG>
      </FlexCenteredColumn>
    </>
  );
};

export default EventsScene;
