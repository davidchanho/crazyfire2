import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import CarouselItem from "./CarouselItem";

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

  const renderCarousel = () => {
    return heroCarousel.map((slide, index) => {
      if (active === index) {
        return <CarouselItem key={slide.name} {...slide} />;
      }

      return null;
    });
  };

  return { handleRight, handleLeft, renderCarousel };
};
