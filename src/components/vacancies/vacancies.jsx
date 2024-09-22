import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Card from "./card/card";
import "./vacancies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

import imageCommodityExpert from "../../assets/images/commodity_expert.png";
import imageDriver from "../../assets/images/driver.png";
import imageBaker from "../../assets/images/baker.png";
import imageCashier from "../../assets/images/cashier.png";
import imageSeller from "../../assets/images/seller.png";
import imageCook from "../../assets/images/cook.png";
import imageReceptionist from "../../assets/images/shutterstock_471102155-removebg-preview 1.png";
import imageSlideButtonRight from "../../assets/icons/Slide-button-right.svg";

export default function Vacancies() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("desktop");
  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,

    afterChange: (current) => {
      setCurrentSlide(current);
    },
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToScroll: 2,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 480) {
      setSlidesToShow(1);
      setCurrentBreakpoint("mobile");
    } else if (width < 768) {
      setSlidesToShow(2);
      setCurrentBreakpoint("tablet");
    } else if (width < 1440) {
      setSlidesToShow(3);
      setCurrentBreakpoint("desktop");
    } else {
      setSlidesToShow(4);
      setCurrentBreakpoint("large-desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(`${slidesToShow} slidesToShow`);
    console.log(`${currentSlide} currentSlide`);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow, currentSlide]);

  const vacancies = {
    commodityExpert: {
      profession: "товаровед",
      imageSrc: imageCommodityExpert,
    },
    driver: {
      profession: "водитель",
      imageSrc: imageDriver,
    },
    baker: {
      profession: "пекарь",
      imageSrc: imageBaker,
    },
    cashier: {
      profession: "кассир",
      imageSrc: imageCashier,
    },
    seller: {
      profession: "продавец",
      imageSrc: imageSeller,
    },
    cook: {
      profession: "повар",
      imageSrc: imageCook,
    },
    receptionist: {
      profession: "приёмщик",
      imageSrc: imageReceptionist,
    },
  };

  return (
    <>
      <section className="vacancies">
        <section className="vacancies__header">
          <h2 className="vacancies__title">вакансии в гросс маркете</h2>
          <div className="buttons-wrapper">
            <button
              className="vacancies__prevSlide"
              onClick={() => sliderRef.current.slickPrev()}
              style={{ opacity: currentSlide === 0 ? 0.2 : 1 }}
            >
              <img src={imageSlideButtonRight} alt="" />
            </button>
            <button
              className="vacancies__nextSlide"
              onClick={() => sliderRef.current.slickNext()}
              style={{
                opacity:
                  currentSlide === slidesToShow ||
                  currentSlide > slidesToShow ||
                  (() => {
                    if (currentBreakpoint === "large-desktop") {
                      if (currentSlide === slidesToShow - 1) {
                        return true;
                      }
                    }
                  })()
                    ? 0.2
                    : 1,
              }}
            >
              <img src={imageSlideButtonRight} alt="" />
            </button>
          </div>
        </section>

        <Slider ref={sliderRef} {...settings}>
          {Object.keys(vacancies).map((key) => (
            <Card key={key} vacancies={vacancies[key]} />
          ))}
        </Slider>
      </section>
    </>
  );
}
