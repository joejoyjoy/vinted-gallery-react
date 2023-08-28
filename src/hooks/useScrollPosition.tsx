import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [needsButton, setNeedsButton] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 600) {
      setNeedsButton(true);
    } else {
      setNeedsButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    needsButton,
  };
};

export default useScrollPosition;
