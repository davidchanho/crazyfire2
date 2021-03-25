import React, { useState } from "react";

function Hero() {
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
    <section>
      {slides.map(({ name, img }, index) => {
        if (active === index) {
          return (
            <div key={name} onClick={handleClick}>
              {name}
              <img src={img} />
            </div>
          );
        }

        return null;
      })}
      <div>
        <button>left</button>
        <button>left</button>
      </div>
    </section>
  );
}

export default Hero;
