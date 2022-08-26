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

  const disable = () => {
    document.querySelector("#sidenav").addEventListener("wheel", preventScroll);
  };

  const enable = () => {
    document
      .querySelector("#sidenav")
      .removeEventListener("wheel", preventScroll);
  };

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
  };

  return { scrollTop, enable, disable };
};
