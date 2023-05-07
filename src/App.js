import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./scenes/Home";
import Events from "./scenes/Events";
import CardRendered from "./components/cardRenderer/CardRendered";
import eventData from "./assets/cardSample";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<CardRendered {...eventData[0]}/>}></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
