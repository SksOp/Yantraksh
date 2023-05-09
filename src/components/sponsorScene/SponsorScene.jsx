import React, { useRef, useEffect } from "react";
import "./SponsorScene.css";
import FlexCenteredRow from "../../muiStyled/FlexCenteredRow";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";
import { useMediaQuery, Button, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import VideoBG from "../utils/VideoBG";
import robotPoster from "../../assets/robotposter.jpg";
import Selector from "./utils/Selector";
import Renderer from "./utils/Renderer";
import MobDetailHub from "./utils/MobDetailHub";
import { TextHeading } from "../homeBackGround/HomeBackGround";
import { Drawer, Avatar, Snackbar, Typography } from "@mui/material";
import FlexLeftColumn from "../../muiStyled/FlexLeftColumn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { videoUrl } from "../../assets/videoUrl";
import CloseIcon from "@mui/icons-material/Close";
import copy from "copy-to-clipboard";
import FlexLeftRow from "../../muiStyled/FlexLeftRow";
const SponsorScene = () => {
  const isDesktop = useMediaQuery("(min-width: 850px)");
  const [selectedSponsor, setSelectedSponsor] = React.useState(0);
  const [isSelectorActive, setIsSelectorActive] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const seletorProp = {
    isSelectorActive,
    setIsSelectorActive,
    setSelectedSponsor,
    selectedSponsor,
  };
  const rendererProp = {
    selectedSponsor,
    isSelectorActive,
    setIsSelectorActive,
    setIsDrawerOpen,
  };
  return (
    <>
      <FlexCenteredColumn
        height={"100vh"}
        width={"100%"}
        sx={{ justifyContent: "flex-start" }}
        padding={"3rem 0"}
        gap={"2rem"}
      >
        {" "}
        <FlexCenteredRow height={isDesktop ? "40%" : "20%"}>
          <TextHeading />
        </FlexCenteredRow>
        <FlexCenteredRow
          zIndex={3}
          width={"100%"}
          height={"60%"}
          mb={isDesktop ? "3rem" : "0"}
          position={"relative"}
        >
          {isDesktop && (
            <>
              <Selector {...seletorProp} />
              <Renderer {...rendererProp} />
            </>
          )}
          {!isDesktop && (
            <>
              {isSelectorActive && <Selector {...seletorProp} />}
              {!isSelectorActive && <MobDetailHub {...rendererProp} />}
            </>
          )}
        </FlexCenteredRow>
        <VideoBG
          videoUrl={videoUrl.robot}
          videoType={"webm"}
          poster={robotPoster}
          width={"110%"}
          restrictWidth={false}
          addNoise={true}
        />
      </FlexCenteredColumn>
      <Drawer
        anchor={"bottom"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default SponsorScene;

// name: Anish Ray
// phone no: 88221 35139
// email:  techfestaus03@gmail.com
// post:  Sponsor Team Lead

// name: Probin Kumar
// phone no: 70996 68328
// email: techfestaus03@gmail.com
// post: Sponsor Team Lead

// name: Manish Kumar Milan
// phone no: 7427845699
// email: techfestaus03@gmail.com
// post: koi post nahi dena

// name:  Aman Kumar
// phone no: 76671 37798
// email: techfestaus03@gmail.com
// post: koi post nahi dena
const constactsDetails = [
  {
    name: "Anish Ray",
    phone: "88221 35139",
    email: "techfestaus@gmail.com",
    post: "Sponsor Team Lead",
  },
  {
    name: "Probin Kumar",
    phone: "70996 68328",
    email: "techfestaus@gmail.com",
    post: "Sponsor Team Lead",
  },
  {
    name: "Manish Kumar Milan",
    phone: "7427845699",
    email: "techfestaus@gmail.com",
  },
  {
    name: "Aman Kumar",
    phone: "76671 37798",
    email: "techfestaus@gmail.com",
  },
];

export const DrawerContent = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const isDesktop = useMediaQuery("(min-width: 850px)");
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard"
      />
      <FlexLeftColumn
        sx={{
          justifyContent: "flex-start",
          backdropFilter: "blur(7px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        padding={"3rem 1.5rem"}
        gap={"2rem"}
        m="0 auto"
        borderRadius={"20px 20px 0 0"}
      >
        {constactsDetails.map((contact, index) => (
          <FlexLeftRow width="100%" gap="0.5rem">
            <Avatar
              sx={{
                backgroundColor: "#130A44",
                border: "2px solid #6E26F4",
              }}
            >
              {contact.name[0]}
            </Avatar>
            <FlexLeftColumn>
              <Typography color="white" variant={"h4"} pl={"0.5rem"}>
                {contact.name}
              </Typography>

              {contact.post && (
                <Box
                  p={"0.1rem 1rem"}
                  borderRadius={"10px"}
                  bgcolor={"#130A44"}
                  border={"2px solid #6E26F4"}
                >
                  <Typography color="white" fontSize={"0.7rem"}>
                    {contact.post ? contact.post : "No role"}
                  </Typography>
                </Box>
              )}
            </FlexLeftColumn>
            <FlexCenteredRow ml="auto" mr={isDesktop ? "0.7rem" : "0.1rem"}>
              <PhoneButton
                phoneNumber={contact.phone}
                open={open}
                setOpen={setOpen}
              />
              <EmailButton emailAddress={contact.email} />
            </FlexCenteredRow>
          </FlexLeftRow>
        ))}
      </FlexLeftColumn>
    </>
  );
};

const EmailButton = ({ emailAddress }) => {
  const handleClick = () => {
    window.open(`mailto:${emailAddress}`, "_self");
  };

  return (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClick}
        sx={{ color: "#6E26F4" }}
      >
        <EmailIcon />
      </IconButton>
    </>
  );
};

const PhoneButton = ({ phoneNumber, open, setOpen }) => {
  const handleClick = () => {
    // Check if the user is on a mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Open the phone dialer with the number pre-filled
      window.open(`tel:${phoneNumber}`, "_self");
    } else {
      // Copy the phone number to the clipboard
      setOpen(true);
      copy(phoneNumber);
    }
  };

  return (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClick}
        sx={{ color: "#6E26F4" }}
      >
        <CallIcon />
      </IconButton>
    </>
  );
};
