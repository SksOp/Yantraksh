import React from "react";
import { Box, Card, CardContent, Typography, alpha } from "@mui/material";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import { styled } from "@mui/system";
import useAutoScroll from "./useAutoScroll";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";

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
      sx={{ margin: "1rem 0" }}
    ></Box>
  );
};

const CardRendered = (props) => {
  const { title, url, description } = props;
  const scrollSpeed = 1.5;
  const scrollRef = useAutoScroll(scrollSpeed);

  return (
    <div style={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          borderRadius: "16px",
          backgroundColor: "#0d0428",
          border: "1px solid", // adjust the border width and style as needed
          borderColor: "#6E26F4",
          padding: "1rem",
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
              <HorizontalLine />
              <Box
                ref={scrollRef}
                mt={1}
                sx={{
                  height: "50%",
                  width: "100%",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <ul
                  style={{
                    color: "white",
                    listStyleType: "disc",
                    paddingLeft: "1em",
                  }}
                >
                  {description.map((item, index) => (
                    <li key={index}>
                      <Typography
                        variant="h7"
                        color="white"
                        paragraph
                        sx={{ fontSize: "0.8rem" }}
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </FlexCenteredColumn>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardRendered;
