import React from "react";
import { Box, Card, CardContent, Typography, alpha } from "@mui/material";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import { styled } from "@mui/system";
import useAutoScroll from "./useAutoScroll";
import FlexLeftRow from "../../muiStyled/FlexLeftRow";
import FlexLeftColumn from "../../muiStyled/FlexLeftColumn";
import hud from "../../assets/hud.png";
import "./CardRendered.css";
const VideoContainer = styled("div")({
  position: "relative",
  padding: "0.7rem",
  //   width: "90%",
  // This creates a 1:1 aspect ratio container
});

const HorizontalLine = () => {
  return (
    <Box
      borderRadius="16px"
      backgroundColor={alpha("#6E26F4", 1)}
      width="90%"
      height="2px"
      sx={{ margin: "0.5rem 0 1rem 0" }}
    ></Box>
  );
};

const CardRendered = (props) => {
  const { title, url, description, isSponsor, price } = props;
  const scrollSpeed = 1;
  const scrollRef = useAutoScroll(scrollSpeed);
  console.log(props);

  return (
    <Card
      sx={{
        height: "90%",
        maxHeight: "550px",
        borderRadius: "16px",
        backgroundColor: "#0d0428",
        border: "1px solid", // adjust the border width and style as needed
        borderColor: "#6E26F4",
        padding: "1rem",
        minWidth: "250px",
        maxWidth: "300px",
      }}
    >
      <CardContent sx={{ height: "100%" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <FlexCenteredColumn sx={{ height: "100%" }}>
            <VideoContainer>
              <video
                autoPlay
                loop
                muted
                style={{
                  autoPlay: true,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                  muted: true,
                }}
              >
                <source src={url} type="video/webm" />
              </video>
            </VideoContainer>

            <Typography
              variant="h3"
              color="white"
              mt={2}
              style={{ fontFamily: "Mechanismo, sans-serif" }}
            >
              {title}
            </Typography>
            {isSponsor && (
              <Typography variant="h7" color="white" mt={1}>
                {price}
              </Typography>
            )}
            <HorizontalLine />
            <FlexLeftColumn
              ref={scrollRef}
              mt={1}
              className="preventOtherScroll"
              sx={{
                height: "50%",
                width: "100%",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {description.map((item, index) => (
                <FlexLeftRow key={index} className="preventOtherScroll">
                  <Box
                    width={"15px"}
                    height={"15px"}
                    minHeight={"15px"}
                    minWidth={"15px"}
                    borderRadius="50%"
                    m={"0.5rem 0.5rem auto 0"}
                  >
                    <img
                      src={hud}
                      alt="bullet point"
                      width="100%"
                      className="rotatingImg preventOtherScroll"
                    />
                  </Box>
                  <Typography
                    className="preventOtherScroll"
                    variant="h7"
                    color="white"
                    paragraph
                    sx={{ fontSize: "0.8rem" }}
                    key={index + "description"}
                  >
                    {item}
                  </Typography>
                </FlexLeftRow>
              ))}
            </FlexLeftColumn>
          </FlexCenteredColumn>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardRendered;
