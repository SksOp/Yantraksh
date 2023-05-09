import React from "react";
import tableHud from "../../../assets/table_hud.png";
import mobileTableHud from "../../../assets/hudEventsMobile.png";
import { Box } from "@mui/system";
import { useMediaQuery, Slide, Typography } from "@mui/material";
import FlexTable from "./FlexTable";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";

const EventTable = (props) => {
  const isDesktop = useMediaQuery("(min-width: 850px)");
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${isDesktop ? tableHud : mobileTableHud})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backdropFilter: "blur(7px)",
          backgroundColor: "rgba(41, 0, 120, 0.18)",
        }}
        width={isDesktop ? "45%" : "80%"}
        minWidth={isDesktop ? "45%" : "80%"}
        height={isDesktop ? "90%" : "80%"}
        m={"1rem"}
        display={"flex"}
        padding={"1rem"}
        paddingLeft={isDesktop ? "2rem" : "1rem"}
        marginBottom={"4rem"}
      >
        <FlexTable data={props} width="100%" height="100%" />
      </Box>
    </>
  );
};

export default EventTable;
