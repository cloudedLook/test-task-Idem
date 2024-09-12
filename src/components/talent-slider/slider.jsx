import "./slider.css";
import slideButtonRight from "../../assets/icons/Slide-button-right.svg";
import imageValentin from "../../assets/images/Valentin.png";

export default function TalentSlider() {
  return (
    <>
      <section className="talent-slider">
        <Slide title={`У тебя к этому талант`} />
      </section>
    </>
  );
}

function Slide({ title }) {
  return (
    <>
      <section className="talent-slider__slide slide">
        <div className="slide__title-wrapper">
          <SlideTitle title={title} />
          <SlideButton />
        </div>
        <SlideImage
          image={imageValentin}
          profession={"пекарь"}
          name={"валентин"}
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
        <button className="slide__right-button slide__buttons">
          <img src={slideButtonRight} alt="" />
        </button>
      </div>
    </>
  );
}

function SlideImage({ image, profession, name }) {
  return (
    <>
      <div className="slide__wrapper-image">
        <img className="slide__image" src={image} alt="" />
        <div className="slide__description slide__profession">
          <p>{profession}</p>
        </div>
        <div className="slide__description slide__name">
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}
