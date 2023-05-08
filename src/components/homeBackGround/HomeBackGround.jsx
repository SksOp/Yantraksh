import React from "react";
import "./HomeBackGround.css";
import { Box, Typography, alpha } from "@mui/material";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import FlexLeftRow from "../../muiStyled/FlexLeftRow";
import VideoBG from "./utils/VideoBG";
const HomeBackGround = () => {
  return (
    <>
      <FlexCenteredColumn height={"100vh"} width={"100%"} zIndex={1}>
        <FlexCenteredColumn
          height={"50%"}
          sx={{
            justifyContent: "flex-end",
          }}
          gap={"1rem"}
          padding={"1rem"}
        >
          <Typography
            variant="h1"
            fontSize={{ xs: "3rem", sm: "5rem", md: "7rem", lg: "7rem" }}
            sx={{ color: "#FFFFFF", position: "relative" }}
            zIndex={2}
          >
            <span>YANTRAKSH</span>
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
              YANTRAKSH
            </span>
          </Typography>
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
        <Box
          //keep this flex child height to 50% of parent
          height={"50%"}
          width={"100%"}
          zIndex={2}
        >
          <FlexLeftRow
            zIndex={2}
            width={"95%"}
            height={"95%"}
            border={"1px solid red"}
            margin={"0 auto"}
            maxWidth={"800px"}
            sx={{
              borderRadius: "20px",
              border: "1.5px solid #6E26F4",
              backdropFilter: "blur(15px)",
            }}
            position={"relative"}
          >
            <MouseTracer />
          </FlexLeftRow>
        </Box>
      </FlexCenteredColumn>

      <VideoBG />
    </>
  );
};

export default HomeBackGround;

const MouseTracer = () => {
  //making an absolute div to track mouse movement within the parent div and it will appear only when mouse is inside the parent div
  const [isMouseInside, setMouseInside] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  return <></>;
};
