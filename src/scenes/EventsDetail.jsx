import React from "react";
import { useLocation } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const myParam = searchParams.get("id");
  console.log(myParam);
};

export default MyComponent;
