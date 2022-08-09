import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrollTop(winScroll);
  };

  return { scrollTop };
};
