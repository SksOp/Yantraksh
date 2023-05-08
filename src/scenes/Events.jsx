import React from "react";

import CardRendered from "../components/cardRenderer/CardRendered";
import eventData from "../assets/cardSample";
import FlexCenteredRow from "../muiStyled/FlexCenteredRow";
import { Box } from "@mui/material";

const Events = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <FlexCenteredRow style={{ height: "100vh", width: "100%" }}>
        <CardRendered {...eventData[0]} />
        <CardRendered {...eventData[0]} />
        <CardRendered {...eventData[0]} />
      </FlexCenteredRow>
    </div>
  );
};

export default Events;
