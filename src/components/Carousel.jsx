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
        left: "25px",          // Position adjustment
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
        right: "25px",         // Position adjustment
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {">"}
    </button>
  );
};



// Individual Slide Component
const Slide = ({ imagePath, children }) => (
  <div className="bg-green-500 h-[70vh] flex items-center justify-center">
    <img src={imagePath} 
    alt={children} 
    className="object-cover h-full w-full"
    />
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
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        }, 
    ],
  };

  return (
    <div className="w-9/10 mx-auto my-5">
      <Slider {...settings}>
        <Slide imagePath="galleryPics/Gallery1.JPG"></Slide>
        <Slide imagePath="galleryPics/Gallery2.JPG"></Slide>
        <Slide imagePath="galleryPics/Gallery3.jpg"></Slide>
        <Slide imagePath="galleryPics/Gallery4.JPG"></Slide>
        <Slide imagePath="galleryPics/Gallery5.JPG"></Slide>
        <Slide imagePath="galleryPics/Gallery6.JPG"></Slide>
        <Slide imagePath="galleryPics/Gallery7.png"></Slide>
        <Slide imagePath="galleryPics/Gallery8.png"></Slide>
        <Slide imagePath="galleryPics/Gallery9.jpg"></Slide>
        <Slide imagePath="galleryPics/Gallery10.JPG"></Slide>
        <Slide imagePath="galleryPics/Gallery11.jpg"></Slide>
        <Slide imagePath="galleryPics/Gallery12.jpg"></Slide>
        <Slide imagePath="galleryPics/Gallery13.jpg"></Slide>
      </Slider>
    </div>
  );
}
