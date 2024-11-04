import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} bg-emerald text-white p-2 rounded-full`}
      style={{
        fontSize: "24px",      // Arrow size
        left: "10px",          // Position adjustment
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {"<"}
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} p-2 rounded-full`}
      style={{
        right: "10px",         // Position adjustment
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {">"}
    </button>
  );
};



// Individual Slide Component
const Slide = ({ children }) => (
  <div className="bg-green-500 h-[60vh] flex items-center justify-center">
    <h3 className="text-white text-3xl">{children}</h3>
  </div>
);

// Carousel Component
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-9/10 mx-auto">
      <Slider {...settings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
        <Slide>6</Slide>
      </Slider>
    </div>
  );
}
