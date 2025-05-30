import { useInView } from "react-intersection-observer";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import firstDate from "../assets/images/firstDate.jpg";
import official from "../assets/images/official.jpg";
import engagement from "../assets/images/engagement.jpg";
import roadTrip from "../assets/images/roadTrip.jpg";
import { useWindowSize } from "../hooks/useWindowSize";

const timelineData = [
  {
    label: "May 7 | First Date",
    image: firstDate,
  },
  {
    label: "May 31 | Made It Official",
    image: official,
  },
  {
    label: "June 14 | Wedding Day",
    image: roadTrip,
  },
  {
    label: "March 20 | Engagement",
    image: engagement,
  },
];

const TimelineItem = ({ label, image }: { label: string; image: string }) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const isMobile = useWindowSize().isMobile;

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "#40628A",
          mt: "10px",
          ml: "6px",
        }}
      />

      <Box>
        <Typography variant="h6" mb={2}>
          {label}
        </Typography>

        <motion.img
          src={image}
          alt={label}
          style={{
            width: "50vw",
            height: isMobile ? "20vh" : "50vh",
            objectFit: "cover",
            objectPosition: isMobile ? "center 50%" : "center 65%",
            display: "block",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
            filter: inView ? "none" : "blur(4px)",
          }}
          animate={{
            scale: inView ? 1 : 0.8,
          }}
        />
      </Box>
    </Box>
  );
};

const Timeline = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography variant="h3" m={6} fontFamily="Playfair Display">
        Timeline
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "20vw",
          width: "3px",
          backgroundColor: "#40628A",
          zIndex: 0,
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {timelineData.map((event, index) => (
          <TimelineItem key={index} label={event.label} image={event.image} />
        ))}
      </Box>
    </Container>
  );
};

export default Timeline;
