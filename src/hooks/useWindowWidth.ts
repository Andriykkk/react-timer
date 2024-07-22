import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      updateWindowWidth();

      window.addEventListener("resize", updateWindowWidth);

      return () => {
        window.removeEventListener(
          "resize",
          updateWindowWidth
        );
      };
    }
  }, []);

  return windowWidth;
};

export default useWindowWidth;
