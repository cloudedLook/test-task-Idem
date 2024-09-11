import "./header.css";
import logo from "../../assets/icons/Logo.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-wrapper">
          <img className="logo-wrapper__image" src={logo} alt="logo" />
          <h2 className="logo-wrapper__text">гросс маркет</h2>
        </div>
        <div className="user-actions">
          <p className="user-actions__number">+7 (926) 433-14-16</p>
          <button className="user-actions__button">заполнить анкету</button>
        </div>
      </header>
    </>
  );
}
