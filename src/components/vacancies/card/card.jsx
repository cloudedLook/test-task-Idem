import "./card.css";

export default function Card(props) {
  return (
    <>
      <article className="card">
        <div className="card__profession-wrapper">
          <h3 className="card__profession">{props.vacancies.profession}</h3>
        </div>
        <img className="card__image" src={props.vacancies.imageSrc} alt="" />
      </article>
    </>
  );
}
