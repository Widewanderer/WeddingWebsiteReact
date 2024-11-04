import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-4/5 mx-auto">
      {" "}
      <Slider {...settings}>
        <div className="bg-emerald h-64 flex items-center justify-center">
          <h3 className="text-white text-3xl">1</h3>
        </div>
        <div className="bg-green-500 h-64 flex items-center justify-center">
          <h3 className="text-white text-3xl">2</h3>
        </div>
        <div className="bg-green-500 h-64 flex items-center justify-center">
          <h3 className="text-white text-3xl">3</h3>
        </div>
        <div className="bg-green-500 h-64 flex items-center justify-center">
          <h3 className="text-white text-3xl">4</h3>
        </div>
        <div className="bg-green-500 h-64 flex items-center justify-center">
          <h3 className="text-white text-3xl">5</h3>
        </div>
        <div className="bg-green-500 h-64 flex items-center justify-center">
          <h3 className="text-white text-3xl">6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;

