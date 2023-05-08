import React from "react";
import "./Selector.css";
import { useMediaQuery, Slide, Typography } from "@mui/material";
import selectorDesktop from "../../../assets/selectorDesktop.png";
import mobhud from "../../../assets/mobhud.png";
import { Box } from "@mui/material";
import { sponsorData } from "../../../assets/sponsorData";
import FlexLeftRow from "../../../muiStyled/FlexLeftRow";
import hud from "../../../assets/hud.png";
const Selector = (props) => {
  const {
    isSelectorActive,
    setIsSelectorActive,
    isRendererActive,
    setIsRendererActive,
    setSelectedSponsor,
  } = props;
  const isDesktop = useMediaQuery("(min-width: 850px)");
  return (
    <>
      <Slide direction="right" in={isSelectorActive} mountOnEnter unmountOnExit>
        <Box
          sx={{
            backgroundImage: `url(${isDesktop ? selectorDesktop : mobhud})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backdropFilter: "blur(7px)",
          }}
          width={isDesktop ? "30%" : "70%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          ml={isDesktop ? "auto" : "unset"}
          maxWidth={isDesktop ? "unset" : "350px"}
          justifyContent={"center"}
          gap={"1rem"}
          p={isDesktop ? "3rem" : " 1rem 4rem"}
        >
          {sponsorData.map((sponsor, index) => {
            return (
              <SponsorTitleRenderer
                key={index + "sponsor"}
                title={sponsor.title}
                index={index}
              />
            );
          })}
        </Box>
      </Slide>
    </>
  );
};

export default Selector;

const SponsorTitleRenderer = ({ title }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 850px)");
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  console.log(isHovering);
  return (
    <FlexLeftRow
      sx={{
        cursor: "pointer",
        ":hovor sponsorTitleTypography": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
        " div": {
          transition: "all 0.2s ease-in-out",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        width={isHovering ? "20px" : "15px"}
        height={"15px"}
        minHeight={"15px"}
        minWidth={"15px"}
        borderRadius="50%"
        m={"0.5rem "}
      >
        <img
          src={hud}
          alt="bullet point"
          width="100%"
          className="rotatingImg preventOtherScroll"
        />
      </Box>
      <Box height={isDesktop ? "1.2rem" : "1.3rem"}>
        <Typography
          component="div"
          gutterBottom
          fontFamily="Mechanismo, sans-serif"
          color="white"
          m="auto auto auto 0"
          letterSpacing={"0.05rem"}
          className="sponsorTitleTypography"
          fontSize={isDesktop ? `${isHovering ? "1.1rem" : "0.9rem"}` : "1rem"}
        >
          {title}
        </Typography>
      </Box>
    </FlexLeftRow>
  );
};
