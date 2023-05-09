import React, { useEffect, useRef } from "react";
import "./MobDetailHub.css";
import {
  Slide,
  Typography,
  Box,
  Button,
  useMediaQuery,
  ClickAwayListener,
} from "@mui/material";
import mobhud from "../../../assets/mobhudRenderer.png";
import { sponsorData } from "../../../assets/sponsorData";

import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexLeftRow from "../../../muiStyled/FlexLeftRow";
import FlexLeftColumn from "../../../muiStyled/FlexLeftColumn";
const MobDetailHub = (props) => {
  const {
    selectedSponsor,
    isSelectorActive,
    setIsSelectorActive,
    setIsDrawerOpen,
  } = props;
  const handleBackClick = () => setIsSelectorActive(true);

  const [data, setData] = React.useState(sponsorData[selectedSponsor]);
  const isBreakPoint = useMediaQuery("(min-width: 350px)");

  return (
    <ClickAwayListener onClickAway={handleBackClick}>
      <Slide direction="left" in={!isSelectorActive}>
        <Box
          sx={{
            backgroundImage: `url(${mobhud})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backdropFilter: "blur(7px)",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            boxShadow: " inset -6px -55px 162px -21px rgba(0,0,0,0.32)",
          }}
          width={"70%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"350px"}
          overflow={"scroll"}
          p={"1rem 0"}
        >
          <Typography
            variant="h1"
            color="white"
            sx={{
              cursor: "pointer",
              m: "0 auto",
            }}
            fontSize={{ xs: "1.6rem", sm: "1.9rem", md: "2.5rem", lg: "3rem" }}
          >
            {data.title}
          </Typography>

          <FlexLeftColumn maxWidth={470} margin="10px 15px" gap={"1rem"}>
            <FlexLeftRow ml={"1.5rem"}>
              <Button
                onClick={() => setIsDrawerOpen(true)}
                sx={{
                  backgroundColor: "#130A44",
                  color: "#FFFFFF",
                  textTransform: "none",
                  borderRadius: "20px",
                  border: "1.5px solid #6E26F4",
                  boxShadow:
                    "inset -2px -1px 21px 7px rgba(96, 102, 255, 0.15)",
                  padding: "0.4rem 1.8rem",
                  "&:hover": {
                    backgroundColor: "#130A44",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  fontSize={{
                    xs: "0.7rem",
                    sm: "0.8rem",
                    md: "1.5rem",
                    lg: "1.8rem",
                  }}
                >
                  {data.price}
                </Typography>
              </Button>
            </FlexLeftRow>
            {data.description.map((description, index) => {
              return (
                <FlexLeftRow
                  key={index + "description"}
                  padding={isBreakPoint ? "0 2rem" : "0 1.5rem"}
                >
                  <Typography variant="h5" color={"white"}>
                    {description}
                  </Typography>
                </FlexLeftRow>
              );
            })}
          </FlexLeftColumn>
        </Box>
      </Slide>
    </ClickAwayListener>
  );
};

export default MobDetailHub;
