import { Box } from "@mui/system";
import { useWindowSize } from "../hooks/useWindowSize";

const Footer = () => {
  const isMobile = useWindowSize().isMobile;

  return (
    <Box
      sx={{
        width: "100vw",
        height: isMobile ? "20vh" : "20vh",
        backgroundColor: "rgb(248, 245, 241)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></Box>
  );
};

export default Footer;
