import { useState, useEffect } from "react";
import "./slider.css";
import slideButtonRight from "../../assets/icons/Slide-button-right.svg";
import imageValentin from "../../assets/images/Valentin.png";
import imageKsenia from "../../assets/images/Ksenia.png";

export default function TalentSlider() {
  const [slideId, setSlideId] = useState(0);
  const updateState = (newState) => {
    setSlideId(newState);
  };

  return (
    <>
      <section className="talent-slider">
        <Slide slideId={slideId} updateState={updateState} />
      </section>
    </>
  );
}

function Slide({ slideId, updateState }) {
  const slides = {
    0: {
      name: "валентин",
      profession: "пекарь",
      title: "У тебя к этому талант",
      image: imageValentin,
      styleName: { top: "65%", right: "57%" },
      styleProfession: { top: "25%", right: "20%" },
    },
    1: {
      name: "ксения",
      profession: "товаровед",
      title: "У тебя всё под контролем",
      image: imageKsenia,
      styleName: { top: "25%", right: "62%" },
      styleProfession: { top: "65%", right: "13%" },
    },
  };

  return (
    <>
      <section className="talent-slider__slide slide">
        <div className="slide__title-wrapper">
          <SlideTitle title={slides[slideId].title} />
          <SlideButton
            updateState={updateState}
            slideId={slideId}
            slidesLength={Object.keys(slides).length}
          />
        </div>
        <SlideImage props={slides[slideId]} />
      </section>
    </>
  );
}

function SlideTitle({ title }) {
  return (
    <>
      <h1 className="slide__title">{title}</h1>
    </>
  );
}

function SlideButton({ updateState, slideId, slidesLength }) {
  useEffect(() => {
    buttonOpacity(slideId);
    function buttonOpacity(slideId) {
      const leftButton = document.querySelector(".slide__left-button");
      const rightButton = document.querySelector(".slide__right-button");

      if (leftButton && rightButton) {
        if (slideId === 0) {
          leftButton.style.opacity = "20%";
          rightButton.style.opacity = "100%";
        } else if (slideId === slidesLength - 1) {
          rightButton.style.opacity = "20%";
          leftButton.style.opacity = "100%";
        } else {
          leftButton.style.opacity = "100%";
          rightButton.style.opacity = "100%";
        }
      }
    }
  }, [slideId, slidesLength]);

  function slideChange(newSlideId) {
    if (newSlideId >= 0 && newSlideId < slidesLength) {
      updateState(newSlideId);
    }
  }
  return (
    <>
      <div className="slide__wrapper-buttons">
        <button
          className="slide__left-button slide__buttons"
          onClick={() => slideChange(slideId - 1)}
        >
          <img src={slideButtonRight} alt="" />
        </button>
        <div className="slide__vertical-line"></div>
        <button
          className="slide__right-button slide__buttons"
          onClick={() => slideChange(slideId + 1)}
        >
          <img src={slideButtonRight} alt="" />
        </button>
      </div>
    </>
  );
}

function SlideImage({ props }) {
  return (
    <>
      <div className="slide__wrapper-image">
        <img className="slide__image" src={props.image} alt="" />
        <div
          style={{ top: props.styleName.top, right: props.styleName.right }}
          className="slide__description slide__name"
        >
          <p>{props.name}</p>
        </div>
        <div
          style={{
            top: props.styleProfession.top,
            right: props.styleProfession.right,
          }}
          className="slide__description slide__profession"
        >
          <p>{props.profession}</p>
        </div>
      </div>
    </>
  );
}
