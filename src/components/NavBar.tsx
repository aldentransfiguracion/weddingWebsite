import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "RSVP", path: "/rsvp" },
  { label: "Schedule", path: "/schedule" },
  { label: "Registry", path: "/registry" },
];

export const NavBar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          boxShadow: "none",
          zIndex: 10,
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={RouterLink}
                to={page.path}
                sx={{ color: "#fff" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
