import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useCarousel } from "./useCarousel";

function Carousel() {
  const {
    handleLeft,
    handleRight,
    renderCarousel,
  } = useCarousel();
  return (
    <div className="w-full flex items-center justify-between">
      <button onClick={handleLeft}>
        <AiOutlineLeft
          className="text-gray-500 focus:ring-2 focus:ring-blue-600"
          size={32}
        />
      </button>

      {renderCarousel()}

      <button onClick={handleRight}>
        <AiOutlineRight
          className="text-gray-500 focus:ring-2 focus:ring-blue-600"
          size={32}
        />
      </button>
    </div>
  );
}

export default Carousel;
