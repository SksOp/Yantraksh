import React from "react";
import "./HomepageLowerContent3.css";
import {
  Box,
  Typography,
  alpha,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import FlexCenteredRow from "../../../muiStyled/FlexCenteredRow";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const HomepageLowerContent4 = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <FlexCenteredRow
      zIndex={2}
      gap={isDesktop ? "2rem" : "1rem"}
      padding={"1rem 5rem"}
      maxWidth={"500px"}
      width={"100%"}
      sx={{
        background: alpha("#350099", 0.17),
        borderRadius: "30px",
      }}
      m="2rem auto"
    >
      <IconButton
        href="https://www.instagram.com/yantraksh.aus/"
        target="_blank"
      >
        <InstagramIcon sx={{ color: "#fff" }} />
      </IconButton>
      <IconButton href="https://www.youtube.com/@austechfest" target="_blank">
        <YouTubeIcon sx={{ color: "#fff" }} />
      </IconButton>
      <IconButton href="" target="_blank">
        <LinkedInIcon sx={{ color: "#fff" }} />
      </IconButton>
      <IconButton href="https://www.facebook.com/yantraksh.aus" target="_blank">
        <FacebookIcon sx={{ color: "#fff" }} />
      </IconButton>
    </FlexCenteredRow>
  );
};

export default HomepageLowerContent4;

const text =
  "YANTRAKSH is a techfest organized by Assam University. It is a platform for tech enthusiasts to showcase their skills and compete with each other. The event includes various competitions and workshops related to robotics, programming, and other technical fields. YANTRAKSH provides an opportunity for students to interact with industry experts and learn from their experiences. The fest aims to encourage innovation and creativity among young minds and inspire them to pursue careers in technology.";
