import React from "react";

const VideoBG = ({
  videoUrl,
  videoType,
  poster,
  width,
  restrictWidth,
  addNoise,
}) => {
  return (
    <>
      {addNoise && (
        <div
          style={{
            position: "fixed",
            zIndex: "1",
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            backgroundColor: "#000000",
            backgroundImage: "url(https://arc.net/noise.png)",
            opacity: "0.15",
          }}
        ></div>
      )}
      {!restrictWidth && (
        <div
          style={{
            zIndex: "1",
            position: "fixed",
            height: "100vh",
            width: "100vw",
            top: "0",
            left: "0",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 28.52%, rgba(2, 0, 18, 0.39) 48.7%, #020012 75.93%, #020012 100%",
          }}
        ></div>
      )}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          zIndex: "0",
          width: width ? width : "100%",
          minWidth: restrictWidth ? "1000px" : "1500px",
          maxWidth: restrictWidth ? "1200px" : "unset",
          //centerign an absoltue element
          top: "50%",
          left: "50%",
          transform: `translate(-50%, ${!restrictWidth ? "-70%" : "-50%"})`,
          minHeight: restrictWidth ? "unset" : "100vh",
          backgroundColor: "#000000",

          //to add noise
        }}
        poster={poster}
      >
        <source src={videoUrl} type={`video/${videoType}`} />
      </video>
    </>
  );
};

export default VideoBG;
