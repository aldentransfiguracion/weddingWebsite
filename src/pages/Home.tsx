import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import homeHero from "../assets/images/homeHero.jpg";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

const WEDDING_DATE = new Date("August 2, 2025 14:00:00 MDT").getTime();
const BG_COLOR = "#f8f5f1";

const getTimeRemaining = (target: number) => {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
  };
};

export function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(WEDDING_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(WEDDING_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Image */}
      <Box
        component="img"
        src={homeHero}
        alt="Wedding Photo"
        sx={{
          width: "100%",
          height: { xs: "60vh", sm: "50vh", md: "60vh" },
          objectFit: "cover",
          objectPosition: {
            xs: "center 30%",
            sm: "center 40%",
            md: "center 60%",
          },
          display: "block",
        }}
      />

      {/* Countdown Section */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 4, sm: 6 },
          bgcolor: BG_COLOR,
          textAlign: "center",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" fontSize={{ xs: "1.5rem", sm: "2rem" }}>
            August 2, 2025
          </Typography>
          <Typography fontSize={{ xs: "1rem", sm: "1.2rem" }}>
            {timeLeft.days} days : {timeLeft.hours} hours : {timeLeft.minutes}{" "}
            minutes
          </Typography>
          <Button variant="contained" size="large">
            RSVP
          </Button>
        </Stack>
      </Box>

      <Timeline />
      <Footer />
    </>
  );
}
