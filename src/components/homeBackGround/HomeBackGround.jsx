import React from "react";
import "./HomeBackGround.css";
import { Box, Typography, alpha, useMediaQuery } from "@mui/material";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import FlexLeftRow from "../../muiStyled/FlexLeftRow";
import VideoBG from "../utils/VideoBG";
import { useState, useEffect, useRef } from "react";
import { HorizontalLine } from "../navbar/Navbar";
import FlexLeftColumn from "../../muiStyled/FlexLeftColumn";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import nebula from "../../assets/nebula.webm";
import nebulaPoster from "../../assets/nebulaposter.jpg";
import halfCircle from "../../assets/halfCircle.svg";
import HomepageLowerContent from "./utils/HomepageLowerContent";
const HomeBackGround = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parentRef = useRef(null);
  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    if (parentRef.current) {
      const { top, left } = parentRef.current.getBoundingClientRect();
      setMousePosition({ x: clientX - left, y: clientY - top });
    }
  }
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <>
      <FlexCenteredColumn
        height={"100vh"}
        width={"100%"}
        zIndex={1}
        sx={{
          justifyContent: "space-around",
        }}
      >
        <FlexCenteredColumn
          height={isDesktop ? "50%" : "40%"}
          sx={{
            justifyContent: isDesktop ? "center" : "center",
          }}
          gap={"1rem"}
          padding={"4rem 1rem"}
        >
          <TextHeading />
          <Box
            zIndex={2}
            padding={"0.5rem 1.2rem"}
            borderRadius={"0.5rem"}
            sx={{
              backgroundColor: alpha("#130A44", 0.3),
              ":hover": {
                backgroundColor: alpha("#130A44", 0.6),
              },
            }}
          >
            <Typography
              variant="h3"
              fontSize={{
                xs: "0.7rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.3rem",
              }}
              sx={{ color: "#FFFFFF" }}
            >
              <span>Assam University, Silchar 2023</span>
            </Typography>
          </Box>
        </FlexCenteredColumn>
        <HomepageLowerContent />
        {/* <Box
          //keep this flex child height to 50% of parent
          height={"50%"}
          width={"100%"}
          zIndex={2}
          padding={"0 1.7rem"}
        >
          <FlexCenteredRow
            ref={parentRef}
            onMouseMove={handleMouseMove}
            className="mouse-tracker"
            flexDirection={isDesktop ? "row" : "column"}
            height={isDesktop ? "100%" : "unset"}
          >
            <MouseTracer mousePosition={mousePosition} />
            <DetailsTabRenderer title="Yantraksh" yantraksh />
            <DetailsTabRenderer title="Events" events />
          </FlexCenteredRow>
        </Box> */}
      </FlexCenteredColumn>

      <VideoBG
        restrictWidth={true}
        videoUrl={nebula}
        poster={nebulaPoster}
        videoType={"webm"}
      />
    </>
  );
};

export default HomeBackGround;

const MouseTracer = ({ mousePosition }) => {
  //making an absolute div to track mouse movement within the parent div and it will appear only when mouse is inside the parent div

  return (
    <>
      <Box
        className="blurred-circle"
        zIndex={2}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: 0.5,
        }}
      ></Box>
    </>
  );
};

export const TextHeading = () => {
  const [trigger, setTrigger] = useState(false);
  const text = "YANTRAKSH";
  const currentText = useAnimatedText(text, trigger);
  useEffect(() => {
    setTimeout(() => {
      setTrigger(true);
      console.log("dddd");
    }, 1);
  }, []);
  const handleMouseEnter = () => {
    setTrigger(true);
  };
  const handleMouseLeave = () => {
    if (currentText === text) {
      setTrigger(false);
    }
  };

  useEffect(() => {
    if (currentText === text) {
      setTrigger(false);
    }
  }, [currentText]);

  return (
    <Typography
      variant="h1"
      fontSize={{ xs: "3rem", sm: "5rem", md: "7rem", lg: "7rem" }}
      sx={{ color: "#FFFFFF", position: "relative" }}
      zIndex={2}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{currentText}</span>
      <span
        style={{
          position: "absolute",
          left: "0.25rem",
          top: "0.25rem",
          WebkitTextStroke: "1px #FFFFFF",
          WebkitTextFillColor: "transparent",
          WebkitTextStrokeWidth: "1px",
        }}
      >
        {currentText}
      </span>
    </Typography>
  );
};

const useAnimatedText = (text, trigger) => {
  const [currentText, setCurrentText] = useState(text);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  const getRandomIndex = () => Math.floor(Math.random() * characters.length);
  useEffect(() => {
    if (!trigger) {
      return;
    }

    let interval;
    let target = Array(text.length).fill(null);

    const animate = () => {
      const updated = target.map((char, index) =>
        char === text[index] ? char : characters[getRandomIndex()]
      );

      setCurrentText(updated.join(""));
      const done = target.every((char, index) => char === text[index]);

      if (done) {
        clearInterval(interval);

        return;
      }

      target = updated;
    };

    interval = setInterval(animate, 3);

    return () => clearInterval(interval);
  }, [text, trigger, characters]);

  return currentText;
};

const DetailsTabRenderer = ({ title, yantraksh, events }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <FlexLeftColumn
      color="white"
      width={isDesktop ? "48%" : "100%"}
      height={"95%"}
      padding={"1.5rem"}
      borderRadius={"0.5rem"}
      border={"1.5px solid #6e26f4"}
      flex="1"
      sx={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        ":hover": {
          backgroundColor: alpha("#130A44", 0.4),
        },
      }}
      overflow="auto"
      className="no-scrollbar"
    >
      <Typography variant="h3">{title}</Typography>
      <HorizontalLine />
      {yantraksh && (
        <Typography variant="h5" sx={{ marginTop: "0.3rem" }}>
          {detail}
        </Typography>
      )}
      {events && "Coming Soon . . ."}
    </FlexLeftColumn>
  );
};

const detail =
  "Yantraksh is an annual tech festival of Assam University that celebrates innovation, creativity, and technology. It is an event that brings together students, professionals, and enthusiasts from all over the India to showcase their ideas, inventions and experiments. The festival is an excellent platform for networking, learning, and exploring new technologies.";
