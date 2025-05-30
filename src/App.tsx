import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Rsvp } from "./pages/Rsvp";
import { Registry } from "./pages/Registry";
import { Schedule } from "./pages/Schedule";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { NavBar } from "./components/NavBar";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, system-ui, sans-serif",
    body1: {
      fontFamily: "Montserrat, system-ui, sans-serif",
      fontSize: "1rem",
    },
    h1: {
      fontFamily: "Playfair Display, serif",
      fontSize: "3rem",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
