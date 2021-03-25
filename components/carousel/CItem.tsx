import React from "react";

interface CItemProps {
  name: string;
  img: string;
  handleClick: () => void;
}

function CItem({ name, img, handleClick }: CItemProps) {
  return (
    <div onClick={handleClick}>
      {name}
      <img src={img} />
    </div>
  );
}

export default CItem;
