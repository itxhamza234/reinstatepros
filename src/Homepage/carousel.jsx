import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';

// Image paths and overlay content
const slides = [
  {
    image: "/amz1.jpg",
    title: "Brand Registry",
    subtitle: "Fix frustrating suspensions and problems",
    buttonText: "GET STARTED",
    route: "/brand-registry"
  },
  {
    image: "/amz2.jpg",
    title: "Amazon Appeal",
    subtitle: "Reinstate your Amazon account and ASINs",
    buttonText: "GET STARTED",
    route: "/amazon-appeals"
  },
  {
    image: "/amz3.jpg",
    title: "FundsDisbursement",
    subtitle: "Get back every penny Amazon owes you",
    buttonText: "GET STARTED",
    route: "/funds-disbursement"
  },
  {
    image: "/amz4.jpg",
    title: "Contact us today",
    phoneNumber: "0307-7971099",
    email: "info@amzreinstatementconsultant.com",
    buttonText: "CONTACT US",
    route: "/contact-us"
  }
];

const DemoCarousel = () => {
  const navigate = useNavigate();

  // Preload images once
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Overlay UI
  const renderOverlay = (slide) => (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 px-4 sm:px-8 lg:px-16 z-10">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 drop-shadow">{slide.title}</h2>
      {slide.subtitle && <p className="text-base sm:text-lg mb-2">{slide.subtitle}</p>}
      {slide.phoneNumber && <p className="text-lg font-semibold mb-1">{slide.phoneNumber}</p>}
      {slide.email && <p className="text-base mb-4">{slide.email}</p>}
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition"
        onClick={() => navigate(slide.route)}
      >
        {slide.buttonText}
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-screen-2xl mx-auto overflow-hidden">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        transitionTime={700}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={false}
        useKeyboardArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center z-20"
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center z-20"
            >
              ❯
            </button>
          )
        }
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {renderOverlay(slide)}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
