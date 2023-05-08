import React from "react";

import CardRendered from "../components/cardRenderer/CardRendered";
import eventData from "../assets/cardSample";
import FlexCenteredRow from "../muiStyled/FlexCenteredRow";

const Events = () => {
  return (
    <div
      style={{
        perspective: "1000px",
      }}
    >
      <CardRendered {...eventData[0]} />;
    </div>
  );
};

export default Events;
