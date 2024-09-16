import { useState } from "react";
import "./slider.css";
import slideButtonRight from "../../assets/icons/Slide-button-right.svg";
import imageValentin from "../../assets/images/Valentin.png";
import imageKsenia from "../../assets/images/Ksenia.png";

export default function TalentSlider() {
  const [slideId, setSlideId] = useState(0);

  return (
    <>
      <section className="talent-slider">
        <Slide title={`У тебя к этому талант`} slideId={slideId} />
        {/* <Slide title={`У тебя к этому талант`} /> */}
      </section>
    </>
  );
}

function Slide({ slideId }) {
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
          <SlideButton />
        </div>
        <SlideImage
          props={slides[slideId]}
          // image={slides[slideId].image}
          // name={"валентин"}
          // profession={"пекарь"}
        />
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

function SlideButton() {
  return (
    <>
      <div className="slide__wrapper-buttons">
        <button className="slide__left-button slide__buttons">
          <img src={slideButtonRight} alt="" />
        </button>
        <button
          // onClick={(setSlideId = slideId + 1)}
          className="slide__right-button slide__buttons"
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
