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
  const { id, icon, heading, description, prize, formUrl } = props.data.data;
  console.log("eventtable", props);

  const isDesktop = useMediaQuery("(min-width: 850px)");

  return (
    <>
      <FlexCenteredColumn
        sx={{
          alignItems: "flex-start",
          padding: "1rem",
          justifyContent: "space-evenly",
          maxWidth: "100%",
        }}
        gap="1rem"
      >
        {getIconComponent(icon, "white")}
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          fontFamily="Mechanismo, sans-serif"
          fontSize={{
            xs: "2rem",
            sm: "2rem",
          }}
        >
          {heading}
        </Typography>

        <FlexCenteredColumn sx={{ alignItems: "flex-start" }}>
          <Typography variant="body1" textAlign="flex-start" color="white">
            {description}
          </Typography>
          <Typography variant="body1" textAlign="flex-start" color="#ACACAC">
            {prize}
          </Typography>
        </FlexCenteredColumn>

        <FlexCenteredRow
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            paddingLeft: isDesktop ? "0" : "0.5rem",
          }}
          gap={isDesktop ? "2rem" : "1rem"}
        >
          <ButtonComp url={`/events/id?id=${id}`} title={"More Details"} />
          <ButtonComp url={formUrl} title={"Register Here"} isBlanck />
        </FlexCenteredRow>
      </FlexCenteredColumn>
    </>
  );
};

export default FlexTable;

export const ButtonComp = ({ url, title, isBlanck }) => {
  const isDesktop = useMediaQuery("(min-width: 850px)");
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#130A44",
        color: "#FFFFFF",
        textTransform: "none",
        borderRadius: "20px",
        border: "1.5px solid #6E26F4",
        padding: isDesktop ? "0.4rem 1rem" : "0.4rem 1rem",
        width: isDesktop ? "12rem" : "7rem",
        boxShadow: "inset -2px -1px 21px 7px rgba(96, 102, 255, 0.15)",
        padding: "0.4rem 1.8rem",
        "&:hover": {
          backgroundColor: "#130A44",
        },
      }}
    >
      <a target={isBlanck ? "_blank" : "_parent"} href={url}>
        <Typography
          variant="h5"
          fontSize={{
            xs: "0.5rem",
            sm: "0.5rem",
            md: "1rem",
            lg: "1rem",
          }}
        >
          {title}
        </Typography>
      </a>
    </Button>
  );
};
