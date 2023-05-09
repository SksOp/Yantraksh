import React, { useEffect } from "react";
import "./Renderer.css";
import { useMediaQuery, Zoom, Typography, Button } from "@mui/material";
import rendererDesktop from "../../../assets/rendererDesktop.png";
import { Box } from "@mui/material";
import { sponsorData } from "../../../assets/sponsorData";
import FlexCenteredColumn from "../../../muiStyled/FlexCenteredColumn";
import FlexLeftRow from "../../../muiStyled/FlexLeftRow";
import FlexLeftColumn from "../../../muiStyled/FlexLeftColumn";

const Renderer = ({ selectedSponsor, setIsDrawerOpen }) => {
  const isDesktop = useMediaQuery("(min-width: 850px)");

  return (
    <>
      <Box
        width={"60%"}
        height={"100%"}
        mr={isDesktop ? "auto" : "unset"}
        position={"relative"}
      >
        {isDesktop &&
          sponsorData.map((sponsor, index) => {
            return (
              <EachSponsorRenderer
                key={index + "sponsor"}
                data={sponsor}
                selectedSponsor={selectedSponsor}
                index={index}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            );
          })}
      </Box>
    </>
  );
};

export default Renderer;

const EachSponsorRenderer = (props) => {
  const { data, selectedSponsor, index, setIsDrawerOpen } = props;
  const [isActive, setIsActive] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 850px)");
  useEffect(() => {
    if (selectedSponsor === index) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedSponsor]);
  return (
    <Zoom
      in={isActive}
      mountOnEnter
      unmountOnExit
      style={{ transformOrigin: isActive ? "0 50% 0" : "0 50% 0" }}
    >
      <Box
        sx={{
          backgroundImage: `url(${rendererDesktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backdropFilter: "blur(7px)",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        tops={"0"}
        left={"0"}
        overflow={"auto"}
      >
        <FlexCenteredColumn width="100%" p={"1.5rem 0"}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              cursor: "pointer",
            }}
          >
            {data.title}
          </Typography>
          <FlexLeftColumn
            maxWidth={470}
            margin="10px auto 10px 10px"
            gap={"1rem"}
            pl={"1rem"}
          >
            <FlexLeftRow key={index + "description"} ml={"1rem"}>
              <Button
                onClick={() => setIsDrawerOpen(true)}
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
                <Typography variant="h5">{data.price}</Typography>
              </Button>
              {/* <Typography
                variant="h4"
                color={"white"}
                sx={{
                  cursor: "pointer",
                }}
              >
                {data.price}
              </Typography> */}
            </FlexLeftRow>
            {data.description.map((description, index) => {
              return (
                <FlexLeftRow
                  key={index + "description"}
                  padding={"0 1.5rem"}
                  gap="0.6rem"
                >
                  <Box
                    width={12}
                    height={12}
                    backgroundColor="#6E26F4"
                    minHeight={12}
                    minWidth={12}
                    borderRadius={12}
                    sx={{
                      border: "2px solid white",
                    }}
                  ></Box>
                  <Typography variant="h5" color={"white"}>
                    {description}
                  </Typography>
                </FlexLeftRow>
              );
            })}
          </FlexLeftColumn>
        </FlexCenteredColumn>
      </Box>
    </Zoom>
  );
};
