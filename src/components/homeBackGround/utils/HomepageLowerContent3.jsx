import React from "react";
import "./HomepageLowerContent3.css";
import { Box, Typography, alpha, useMediaQuery } from "@mui/material";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexLeftColumn from "../../../muiStyled/FlexLeftColumn";
import drone from "../../../assets/drone.png";
const HomepageLowerContent3 = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <FlexCenteredRow
      minHeight={"30vh"}
      height={isDesktop ? "50vh" : ""}
      flexDirection={isDesktop ? "row" : "column-reverse"}
      zIndex={2}
      gap={isDesktop ? "2rem" : "1rem"}
      padding={"1.7rem"}
      maxWidth={"1000px"}
      width={"100%"}
      sx={{
        alignItems: isDesktop ? "center" : "flex-start",
        justifyContent: isDesktop ? "center" : "flex-end",
        background: alpha("#000", 0.4),
        borderRadius: "10px",
      }}
      m="5rem auto"
    >
      <FlexLeftColumn width={isDesktop ? "60%" : "100%"} gap="1rem">
        <Typography variant={"h1"} color={"#fff"}>
          About Yantraksh
        </Typography>
        <Typography variant={"h5"} color={"#fff"}>
          {text}
        </Typography>
      </FlexLeftColumn>
      <FlexCenteredRow width={isDesktop ? "40%" : "100%"}>
        <img
          src={drone}
          alt="drone"
          width="100%"
          height="100%"
          style={{ maxWidth: isDesktop ? "400px" : "250px" }}
        />
      </FlexCenteredRow>
    </FlexCenteredRow>
  );
};

export default HomepageLowerContent3;

const text =
  "YANTRAKSH is a techfest organized by Assam University. It is a platform for tech enthusiasts to showcase their skills and compete with each other. The event includes various competitions and workshops related to robotics, programming, and other technical fields. YANTRAKSH provides an opportunity for students to interact with industry experts and learn from their experiences. The fest aims to encourage innovation and creativity among young minds and inspire them to pursue careers in technology.";
