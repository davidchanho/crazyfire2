import React from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import useScroll from "./useScroll";

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <span className="ml-auto sticky bottom-0">
      <a
        className={visible ? "visible" : "hidden"}
        onClick={scrollTop}
        href="#!"
      >
        <button className="bg-blue-500 text-white rounded m-5 hover:bg-blue-700 hover:ring-2">
          <RiArrowDropUpLine size={32} />
        </button>
      </a>
    </span>
  );
}

export default ScrollToTop;
