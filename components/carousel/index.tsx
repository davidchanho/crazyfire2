import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const [slides] = useState([
    {
      name: "b1",
      img: "https://via.placeholder.com/650",
    },
    {
      name: "b2",
      img: "https://via.placeholder.com/650",
    },
    {
      name: "b3",
      img: "https://via.placeholder.com/650",
    },
  ]);
  const [active, setActive] = useState(0);

  const handleClick = () => {
    if (active < slides.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  return (
    <div>
      {slides.map((slide, index) => {
        if (active === index) {
          return (
            <CarouselItem key={slide.name} {...slide} handleClick={handleClick} />
          );
        }

        return null;
      })}
    </div>
  );
}

export default Carousel;
