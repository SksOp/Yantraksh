import React from "react";
import poster from "../../../assets/videoPoster.jpg";
const VideoBG = () => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        zIndex: "0",
        width: "100%",
        minWidth: "1000px",
        maxWidth: "1200px",
        //centerign an absoltue element
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#000000",
      }}
      poster={poster}
    >
      <source src="nebula.webm" type="video/webm" />
    </video>
  );
};

export default VideoBG;
