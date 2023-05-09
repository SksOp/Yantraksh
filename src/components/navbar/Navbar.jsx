import React, { useState } from "react";
import "./Navbar.css";
import FlexLeftRow from "../../muiStyled/FlexLeftRow";
import {
  Button,
  Box,
  Drawer,
  Typography,
  useMediaQuery,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlexCenteredColumn from "../../muiStyled/FlexCenteredColumn";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [isMobMenuToggled, setMobileMenuToggled] = useState(false);

  return (
    <Box
      sx={{
        backdropFilter: "blur(10px)",
        borderRadius: "2000px",
      }}
      position={"fixed"}
      right={isDesktop ? "20px" : "0px"}
      top="20px"
      zIndex={3}
      p={isDesktop ? "3px 20px" : "0px 20px"}
    >
      <FlexLeftRow gap="1.5rem">
        {isDesktop && (
          <>
            <a href="/">
              <Typography variant="h5">Home</Typography>
            </a>
            <a href="/events">
              <Typography variant="h5">Events</Typography>
            </a>
            {/* <a href="/about">
              <Typography variant="h5">About</Typography>
            </a>
            <a href="/team">
              <Typography variant="h5">Team</Typography>
            </a> */}
            <a href="/sponsor">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#130A44",
                  color: "#FFFFFF",
                  textTransform: "none",
                  borderRadius: "20px",
                  border: "1.5px solid #6E26F4",
                  boxShadow:
                    "inset -2px -1px 21px 7px rgba(96, 102, 255, 0.15)",
                  padding: "0.4rem 1.8rem",
                  "&:hover": {
                    backgroundColor: "#130A44",
                  },
                }}
              >
                <Typography variant="h5">Sponsor</Typography>
              </Button>
            </a>
          </>
        )}
        {!isDesktop && !isMobMenuToggled && (
          <Hamburger setMobileMenuToggled={setMobileMenuToggled} />
        )}
        {!isDesktop && (
          <HamburgerMenu
            isMobMenuToggled={isMobMenuToggled}
            setMobileMenuToggled={setMobileMenuToggled}
          />
        )}
      </FlexLeftRow>
    </Box>
  );
};

export default Navbar;

const Hamburger = ({ setMobileMenuToggled }) => {
  return (
    <Button sx={{ p: 0 }} onClick={() => setMobileMenuToggled(true)}>
      <MenuIcon
        sx={{
          color: "#FFFFFF",
        }}
      />
    </Button>
  );
};

const HamburgerMenu = (props) => {
  const { isMobMenuToggled, setMobileMenuToggled } = props;
  return (
    <Drawer
      anchor="right"
      open={isMobMenuToggled}
      onClose={() => setMobileMenuToggled(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "transparent",
          color: "#FFFFFF",
          width: "100%",
          padding: "20px 0",
          backdropFilter: "blur(10px)",
          height: "100vh",
          boxShadow: "none",
        },
        "& .MuiBackdrop-root": {
          backgroundColor: "transparent",
        },
        "& .MuiDrawer-paper::-webkit-scrollbar": {
          width: "0.0rem",
          height: "0.0rem",
        },
      }}
    >
      <FlexCenteredColumn
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "1rem",
          justifyContent: "flex-start",

          gap: "1rem",
        }}
      >
        <Button
          sx={{ p: 0, marginLeft: "auto", marginBottom: "4rem" }}
          onClick={() => setMobileMenuToggled(false)}
        >
          <CloseIcon sx={{ color: "#FFFFFF" }} />
        </Button>

        <a href="/">
          <Typography variant="h3">Home</Typography>
        </a>
        <HorizontalLine />
        <a href="/events">
          <Typography variant="h3">Events</Typography>
        </a>
        <HorizontalLine />
        {/* <a href="/about">
          <Typography variant="h3">About</Typography>
        </a>
        <HorizontalLine />
        <a href="/team">
          <Typography variant="h3">Team</Typography>
        </a> 
        <HorizontalLine />
        */}
        <a href="/sponsor">
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
            <Typography variant="h3">Sponsor</Typography>
          </Button>
        </a>
      </FlexCenteredColumn>
    </Drawer>
  );
};

export const HorizontalLine = () => {
  return (
    <Box
      backgroundColor={alpha("#fff", 0.2)}
      width="70%"
      height="1px"
      minHeight="1px"
      sx={{ margin: "1rem 0" }}
    ></Box>
  );
};
