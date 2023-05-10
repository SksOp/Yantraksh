import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, Fade } from "@mui/material";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
import { data } from "../../../assets/homePageCardData";
import card from "../../../assets/homePageCard.png";
const HomepageLowerContent1 = () => {
  const [activecard, setActiveCard] = useState(2);
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <>
      <FlexCenteredColumn
        minHeight={isDesktop ? "50vh" : "60vh"}
        width={"100%"}
        zIndex={2}
        maxWidth={"800px"}
        padding={"0 1.7rem"}
        sx={{
          justifyContent: "center",
          flexDirection: "column-reverse",
        }}
        gap="2rem"
      >
        <FlexCenteredRow
          width={"100%"}
          height={"4px"}
          sx={{
            background:
              " linear-gradient(270deg, rgba(110, 38, 244, 0) 9.56%, #FFFFFF 47.73%, rgba(110, 38, 244, 0) 91.89%)",
          }}
          position={"relative"}
        >
          <FlexCenteredRow
            width={"100%"}
            position={"absolute"}
            padding={"0 4rem"}
          >
            {data.map((_, index) => {
              return (
                <CircleRenderer
                  activecard={activecard}
                  index={index}
                  setActiveCard={setActiveCard}
                />
              );
            })}
          </FlexCenteredRow>
        </FlexCenteredRow>
        <FlexCenteredRow height={"50%"}>
          {data.map((item, index) => {
            return (
              <HomePageCardRenderer
                activecard={activecard}
                index={index}
                key={index + "cardrederer"}
                item={item}
              />
            );
          })}
        </FlexCenteredRow>
      </FlexCenteredColumn>
    </>
  );
};

export default HomepageLowerContent1;

const CircleRenderer = ({ activecard, index, setActiveCard }) => {
  const isActive = activecard === index;
  return (
    <Box
      height={isActive ? "25px" : "20px"}
      width={isActive ? "25px" : "20px"}
      sx={{
        backgroundColor: activecard === index ? "#FFFFFF" : "#6E26F4",
        transition: "all 0.4s ease-in-out",
      }}
      onMouseEnter={() => setActiveCard(index)}
      onClick={() => setActiveCard(index)}
      borderRadius={"10px"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        height={"10px"}
        width={"10px"}
        sx={{
          backgroundColor: "white",
          border: "1px solid #FFFFFF",
          transform: "translate(-50%,-50%)",
          transition: "all 0.4s ease-in-out",
        }}
        borderRadius={"20px"}
        top={"50%"}
        left={"50%"}
      ></Box>
    </Box>
  );
};

const HomePageCardRenderer = ({ activecard, index, item }) => {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    if (activecard === index) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activecard]);
  return (
    <>
      {isActive && (
        <Fade
          in={isActive}
          direction={isActive ? "right" : "left"}
          mountOnEnter
          unmountOnExit
          {...(isActive ? { timeout: 500 } : {})}
        >
          <a href="/events">
            <FlexCenteredColumn
              sx={{
                backgroundImage: `url(${card})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width: "200px",
                height: "195px",
                justifyContent: "flex-end",
                position: "relative",
              }}
            >
              <FlexCenteredColumn width={"200px"} position={"absolute"}>
                <img src={item.img} width="150%" alt={item.title} />
              </FlexCenteredColumn>
              <Box p="1rem" textAlign={"center"}>
                <Typography
                  variant="h1"
                  fontSize={"1.5rem"}
                  sx={{ color: "white" }}
                >
                  {item.title}
                </Typography>
              </Box>
            </FlexCenteredColumn>
          </a>
        </Fade>
      )}
    </>
  );
};
