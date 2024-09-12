import logo from "../../assets/icons/Logo.svg";
import "./logo.css";

export default function Logo() {
  return (
    <>
      <div className="logo-wrapper">
        <img className="logo-wrapper__image" src={logo} alt="logo" />
        <h2 className="logo-wrapper__text">гросс маркет</h2>
      </div>
    </>
  );
}
