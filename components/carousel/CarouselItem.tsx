import React from "react";

interface Props {
  name: string;
  img: string;
  handleClick: () => void;
}

function CarouselItem({ name, img, handleClick }: Props) {
  return (
    <div onClick={handleClick}>
      {name}
      <img src={img} />
    </div>
  );
}

export default CarouselItem;
