import React from "react";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import { sponsors } from "../../../assets/sponsors";
import { Box, Typography, useMediaQuery } from "@mui/material";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
const HomepageLowerContent2 = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <FlexCenteredRow
      width={"100%"}
      zIndex={2}
      gap={isDesktop ? "2rem" : "1rem"}
      padding={isDesktop ? "25px 200px" : "25px 0.5rem"}
    >
      {sponsors.map((sponsor, index) => {
        return <RenderSponsor key={index + "sponsor"} sponsor={sponsor} />;
      })}
    </FlexCenteredRow>
  );
};

export default HomepageLowerContent2;

const RenderSponsor = ({ sponsor }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <FlexCenteredColumn flexGrow={1}>
      <FlexCenteredRow>
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          width={"100%"}
          style={{
            maxWidth: isDesktop ? "100px" : "50px",
          }}
        />
      </FlexCenteredRow>
      <FlexCenteredColumn>
        <Typography fontSize={"0.7rem"} color={"#fff"}>
          {sponsor.type}
        </Typography>
      </FlexCenteredColumn>
    </FlexCenteredColumn>
  );
};
