import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./scenes/Home";
import Events from "./scenes/Events";
import Sponsor from "./scenes/Sponsor";
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
          <Route path="Yantraksh/" element={<Home />}></Route>
          {/* <Route path="/events" element={<Events />}></Route> */}
          <Route path="Yantraksh/sponsor" element={<Sponsor />}></Route>
          <Route path="Yantraksh/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
