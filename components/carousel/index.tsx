import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const [slides] = useState([
    {
      name: "b1",
      img: "https://via.placeholder.com/650/FF0000",
    },
    {
      name: "b2",
      img: "https://via.placeholder.com/650/0000FF",
    },
    {
      name: "b3",
      img: "https://via.placeholder.com/650/008000",
    },
  ]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLeft = () => {
    setActive((active) => (active === 0 ? slides.length - 1 : active + 1));
  };

  const handleRight = () => {
    setActive((active) => (active === slides.length - 1 ? 0 : active + 1));
  };

  return (
    <div className="w-full flex items-center justify-between">
      <button onClick={handleLeft}>
        <AiOutlineLeft
          className="text-gray-500 focus:ring-2 focus:ring-blue-600"
          size={32}
        />
      </button>

      {slides.map((slide, index) => {
        if (active === index) {
          return <CarouselItem key={slide.name} {...slide} />;
        }

        return null;
      })}

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
