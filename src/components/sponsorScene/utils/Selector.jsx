import React, { useEffect } from "react";
import "./Selector.css";
import { useMediaQuery, Slide, Typography } from "@mui/material";
import selectorDesktop from "../../../assets/selectorDesktop.png";
import mobhud from "../../../assets/mobhud.png";
import { Box } from "@mui/material";
import { sponsorData } from "../../../assets/sponsorData";
import FlexLeftRow from "../../../muiStyled/FlexLeftRow";
import hud from "../../../assets/hud.png";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
const Selector = (props) => {
  const {
    isSelectorActive,
    setIsSelectorActive,
    setIsRendererActive,
    setSelectedSponsor,
    selectedSponsor,
  } = props;
  const isDesktop = useMediaQuery("(min-width: 850px)");
  useEffect(() => {
    if (isDesktop) {
      setIsSelectorActive(true);
    }
  });
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
          minWidth={isDesktop ? "unset" : "350px"}
        >
          {sponsorData.map((sponsor, index) => {
            return (
              <SponsorTitleRenderer
                key={index + "sponsor"}
                title={sponsor.title}
                setSelectedSponsor={setSelectedSponsor}
                index={index}
                selectedSponsor={selectedSponsor}
                setIsSelectorActive={setIsSelectorActive}
                setIsRendererActive={setIsRendererActive}
              />
            );
          })}
        </Box>
      </Slide>
    </>
  );
};

export default Selector;

const SponsorTitleRenderer = (props) => {
  const {
    title,
    setSelectedSponsor,
    index,
    selectedSponsor,
    setIsSelectorActive,
  } = props;
  const [isHovering, setIsHovering] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 850px)");
  const [isActive, setIsActive] = React.useState(true);

  useEffect(() => {
    if (selectedSponsor === index) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedSponsor]);

  const handleMouseClick = () => {
    setSelectedSponsor(index);
    setIsSelectorActive(false);
  };

  const handleMouseEnter = () => {
    setSelectedSponsor(index);
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <FlexLeftRow
      sx={{
        cursor: "pointer",
        ":hovor sponsorTitleTypography": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
        " div": {
          transition: "all 0.1s ease-in-out",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
      <FlexCenteredRow
        width={"30px"}
        height={"30px"}
        minHeight={"15px"}
        borderRadius="50%"
      >
        <img
          width={isHovering || isActive ? "30px" : "15px"}
          height={isHovering || isActive ? "30px" : "15px"}
          src={hud}
          alt="bullet point"
          m="auto"
          style={{
            transition: "all 0.2s ease-in-out",
          }}
          className={isActive ? "rotatingImg" : ""}
        />
      </FlexCenteredRow>
      <FlexLeftRow height={isDesktop ? "2rem" : "1.3rem"}>
        <Typography
          component="div"
          gutterBottom
          fontFamily="Mechanismo, sans-serif"
          color="white"
          m="auto auto auto 0"
          letterSpacing={"0.05rem"}
          className="sponsorTitleTypography"
          fontSize={`${isHovering || isActive ? "1.1rem" : "0.9rem"}`}
        >
          {title}
        </Typography>
      </FlexLeftRow>
    </FlexLeftRow>
  );
};
