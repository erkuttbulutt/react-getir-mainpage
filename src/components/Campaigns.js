import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ onClick }) {
  return (
    <button
      className="!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ onClick }) {
  return (
    <button
      className="!text-brand-color absolute top-1/2 -left-6 -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [banners]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Slider {...settings} className="md:-mx-2">
        {banners.length &&
          banners.map((banner) => (
            <div key={banner.id} className="md:px-2">
              <img src={banner.image} alt="" className="md:rounded-lg" />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
