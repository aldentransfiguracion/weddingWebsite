import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [MOBILE_BREAKPOINT] = useState<number>(768);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const [SMALL_SCREEN_WIDTH] = useState<number>(1400);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isNotchedIphone, setIsNotchedIphone] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      setIsSmallScreen(window.innerWidth <= SMALL_SCREEN_WIDTH);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    const aspectRatio = window.innerHeight / window.innerWidth;
    if (aspectRatio > 2 && aspectRatio < 2.2) setIsNotchedIphone(true);
    else setIsNotchedIphone(false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowSize,
    isMobile,
    isSmallScreen,
    isNotchedIphone,
  };
};
