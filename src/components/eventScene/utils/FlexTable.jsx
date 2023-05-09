import { Grid, useMediaQuery, Typography, Box, Button } from "@mui/material";
import * as Icons from "@mui/icons-material";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
import { Link } from "@mui/material";

const getIconComponent = (iconName, color) => {
  const IconComponent = Icons[iconName];
  if (!IconComponent) {
    console.warn(`No icon found with name: ${iconName}`);
    return null;
  }
  return <IconComponent style={{ fontSize: 50, color }} />;
};

const FlexTable = (props) => {
  const { icon, heading, description, prize, formUrl } = props.data.data;
  console.log("eventtable", props);

  const isDesktop = useMediaQuery("(min-width: 850)");

  return (
    <>
      <FlexCenteredColumn
        sx={{
          alignItems: "flex-start",
          padding: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        {getIconComponent(icon, "white")}
        <Typography
          variant="h3"
          fontWeight="bold"
          color="white"
          fontFamily="Mechanismo, sans-serif"
        >
          {heading}
        </Typography>

        <Typography variant="body1" textAlign="flex-start" color="white">
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#130A44",
            color: "#FFFFFF",
            textTransform: "none",
            borderRadius: "20px",
            border: "1.5px solid #6E26F4",
            boxShadow: "inset -2px -1px 21px 7px rgba(96, 102, 255, 0.15)",
            padding: "0.4rem 1.8rem",
            "&:hover": {
              backgroundColor: "#130A44",
            },
          }}
        >
          <a target="_blank" href={formUrl}>
            <Typography variant="h5">{prize}</Typography>
          </a>
        </Button>
      </FlexCenteredColumn>
    </>
  );
};

export default FlexTable;
