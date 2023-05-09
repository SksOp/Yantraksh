import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import EventsInfo from "../components/eventsInfo/EventsInfo";
const MyComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const myParam = searchParams.get("id");
  return (
    <>
      <Navbar />
      <EventsInfo id={myParam} />
    </>
  );
};

export default MyComponent;
