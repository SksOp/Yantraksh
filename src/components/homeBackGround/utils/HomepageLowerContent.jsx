import React from "react";
import { Box } from "@mui/material";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
const HomepageLowerContent = () => {
  return (
    <FlexCenteredColumn
      height={"50%"}
      width={"100%"}
      zIndex={2}
      maxWidth={"800px"}
      padding={"0 1.7rem"}
    >
      <FlexCenteredColumn
        height={"80%"}
        width={"100%"}
        gap={"1rem"}
        sx={{
          justifyContent: "flex-end",
          backdropFilter: "blur(10px)",
          border: "1.5px solid #5118b9",
          borderRadius: "20px",
        }}
        pb={"30px"}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={dayjs("2022-04-17")}
            readOnly
            sx={{
              backgroundColor: "white",
            }}
          />
        </LocalizationProvider>
      </FlexCenteredColumn>
      <FlexCenteredRow width={"100%"} height={"50px"} backgroundColor={"red"}>
        {" "}
      </FlexCenteredRow>
    </FlexCenteredColumn>
  );
};

export default HomepageLowerContent;
