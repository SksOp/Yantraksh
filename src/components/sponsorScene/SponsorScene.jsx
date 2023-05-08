import React, { useRef, useEffect } from "react";
import "./SponsorScene.css";
import { sponsorData } from "../../assets/sponsorData";
import CardRendered from "../cardRenderer/CardRendered";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import { useMediaQuery, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const SponsorScene = () => {
  const containerRef = useRef(null);
  const totalSponsors = sponsorData.length;
  const [lastActiveSponsor, setLastActiveSponsor] = React.useState(
    totalSponsors - 1
  );
  const [activeSponsor, setActiveSponsor] = React.useState(0);
  const [activeSponsor2, setActiveSponsor2] = React.useState(1);
  const isbreakPoint = useMediaQuery("(max-width: 1145px)");
  const handleNextSponsor = () => {
    setLastActiveSponsor(activeSponsor);
    setActiveSponsor(activeSponsor2);
    setActiveSponsor2(
      activeSponsor2 + 1 > totalSponsors - 1 ? 0 : activeSponsor2 + 1
    );
  };
  const handlePrevSponsor = () => {
    setActiveSponsor2(activeSponsor);
    setActiveSponsor(lastActiveSponsor);
    setLastActiveSponsor(
      lastActiveSponsor - 1 < 0 ? totalSponsors - 1 : lastActiveSponsor - 1
    );

    console.log({ activeSponsor, activeSponsor2, lastActiveSponsor });
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (isbreakPoint) return;
      const disableScroll = e.target.classList.contains("preventOtherScroll");
      if (disableScroll) return;
      e.preventDefault();
      if (e.deltaY > 0) {
        handleNextSponsor();
      } else {
        handlePrevSponsor();
      }
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleNextSponsor, handlePrevSponsor]);

  return (
    <FlexCenteredRow
      width={"100%"}
      height={"100vh"}
      sx={{
        justifyContent: "space-around",
      }}
      ref={containerRef}
    >
      {isbreakPoint && (
        <Button
          onClick={handlePrevSponsor}
          sx={{
            padding: "1rem",
          }}
        >
          <ArrowBackIosIcon />
        </Button>
      )}
      {!isbreakPoint && (
        <CardRendered {...sponsorData[lastActiveSponsor]} isSponsor />
      )}
      <CardRendered {...sponsorData[activeSponsor]} isSponsor />
      {!isbreakPoint && (
        <CardRendered {...sponsorData[activeSponsor2]} isSponsor />
      )}
      {isbreakPoint && (
        <Button
          onClick={handleNextSponsor}
          sx={{
            padding: "1rem",
          }}
        >
          {" "}
          <ArrowForwardIosIcon />{" "}
        </Button>
      )}
    </FlexCenteredRow>

    // <FlexCenteredRow
    //   width={"100%"}
    //   height={"100vh"}
    //   sx={{
    //     justifyContent: "space-around",
    //   }}
    // >
    //   {Array.isArray(sponsorData) &&
    //     sponsorData.map((sponsor, index) => {
    //       return <CardRendered key={index + "sponsor"} {...sponsor} />;
    //     })}
    // </FlexCenteredRow>
  );
};

export default SponsorScene;
