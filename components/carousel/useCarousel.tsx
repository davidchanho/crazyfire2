import { useEffect, useState } from "react";
import { useAppContext } from "../../context";

export const useCarousel = () => {
  const { heroCarousel } = useAppContext();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLeft = () => {
    setActive((active) =>
      active === 0 ? heroCarousel.length - 1 : active - 1
    );
  };

  const handleRight = () => {
    setActive((active) =>
      active === heroCarousel.length - 1 ? 0 : active + 1
    );
  };

  return { handleRight, handleLeft, heroCarousel, active };
};
