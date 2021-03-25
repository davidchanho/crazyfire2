import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CarouselItem from "./CarouselItem";
import { useCarousel } from "./useCarousel";

function Carousel() {
  const { handleLeft, handleRight, heroCarousel, active } = useCarousel();

  return (
    <div className="w-full flex items-center justify-between">
      <button onClick={handleLeft}>
        <AiOutlineLeft
          className="text-gray-500 focus:ring-2 focus:ring-blue-600"
          size={32}
          aria-label="previous carousel slide"
        />
      </button>

      {heroCarousel.map((slide, index) => {
        if (active === index) {
          return <CarouselItem key={slide.name} {...slide} />;
        }

        return null;
      })}

      <button onClick={handleRight}>
        <AiOutlineRight
          className="text-gray-500 focus:ring-2 focus:ring-blue-600"
          size={32}
          aria-label="next carousel slide"
        />
      </button>
    </div>
  );
}

export default Carousel;
