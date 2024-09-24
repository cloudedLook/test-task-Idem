import "./card.css";

export default function Card(props) {
  function toggleActiveClass() {
    if (
      document.querySelector(`.card.active:not(.card-${props.vacancies.id})`)
    ) {
      document.querySelector(".card.active").classList.remove("active");
    }
    const card = document.querySelector(`.card-${props.vacancies.id}`);
    card.classList.toggle("active");
  }
  return (
    <>
      <article
        className={`card card-${props.vacancies.id}`}
        onClick={toggleActiveClass}
      >
        <div className="card__profession-wrapper">
          <h3 className="card__profession">{props.vacancies.profession}</h3>
        </div>
        <img className="card__image" src={props.vacancies.imageSrc} alt="" />
        <div className="card__text-wrapper">
          <p>{props.vacancies.text}</p>
        </div>
      </article>
    </>
  );
}
