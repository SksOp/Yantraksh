import React from "react";
import VideoBG from "../utils/VideoBG";
import { useMediaQuery } from "@mui/material";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import EventTable from "./utils/EventTable";
import { TextHeading } from "../homeBackGround/HomeBackGround";
import { videoUrl } from "../../assets/videoUrl";

const data = [
  {
    icon: "SmartToy",
    heading: "ROBOLINER CHALLENGE",
    formUrl: "https://forms.gle/tohYjZBwfvHSY7yP8",
    prize: "Winning Prize: 30,000 INR",
    description: "A competition for line following robots.",
  },
  {
    icon: "Code",
    heading: "BATTLE OF THE BRAINS: CODING EDITION",
    formUrl: "https://forms.gle/ZFEmddpEcmWp4g6r9",
    prize: "Winning Prize: 10,000 INR",
    description: "The Ultimate Coding Competition of Coders!",
  },
  {
    icon: "School",
    heading: "HACK-A-FUSION",
    formUrl: "https://forms.gle/o7cwGWFPNMEfR1KY8",
    prize: "Winning Prize: 40,000 INR",
    description: "Theme - Education Technology (EdTech)",
  },
  {
    icon: "PrecisionManufacturing",
    heading: "STEEL STORM",
    formUrl: "https://forms.gle/BMTsdyb8LMW1KYB28",
    prize: "Winning Prize: 40,000 INR",
    description: "Build the mightiest robot and battle for supremacy!",
  },
];

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
          videoUrl={videoUrl.machineFace}
          videoType={"webm"}
          poster={""}
          width={"100%"}
          restrictWidth={false}
          addNoise={true}
        ></VideoBG>
      </FlexCenteredColumn>
    </>
  );
};

export default EventsScene;
