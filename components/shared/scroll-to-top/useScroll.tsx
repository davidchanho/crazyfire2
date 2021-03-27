import { useEffect, useState } from "react";

interface Props {
  scrollpos: number;
  visible: boolean;
}

const useScroll = () => {
  const [scrollState, setScrollState] = useState<Props>({
    scrollpos: 0,
    visible: false,
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos > 250;

    setScrollState({
      scrollpos: currentScrollPos,
      visible,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { visible: scrollState.visible, scrollTop };
};

export default useScroll;
