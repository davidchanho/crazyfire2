import React from "react";

interface Props {
  name: string;
  img: string;
}

function CarouselItem({ name, img }: Props) {
  return (
    <img
      className="mx-5 transition-opacity"
      src={img}
      alt={`picture of ${name}`}
      width={650}
      height={650}
    />
  );
}

export default CarouselItem;
