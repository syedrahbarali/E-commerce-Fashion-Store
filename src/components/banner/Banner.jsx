import "./banner.css";
import { banner } from "../../data";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const slider = useRef(null);

  // TODO: Learn this scroll function
  const scrollLeft = () => {
    slider.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    slider.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        slider.current.scrollLeft + slider.current.clientWidth >=
        slider.current.scrollWidth
      ) {
        slider.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRight();
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner display-none">
      <button onClick={scrollLeft} className="scroll__btn scroll__left">
        <FaAngleLeft />
      </button>

      <button onClick={scrollRight} className="scroll__btn scroll__right">
        <FaAngleRight />
      </button>

      <div ref={slider} className="slider scrollbar-none">
        {banner.map((item, index) => (
          <img key={index} src={item} className="slide" />
        ))}
      </div>
    </div>
  );
};

export default Banner;
