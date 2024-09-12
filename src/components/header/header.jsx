import "./header.css";
import Logo from "../logo/logo";

export default function Header() {
  return (
    <>
      <header className="header">
        <Logo />
        <div className="user-actions">
          <p className="user-actions__number">+7 (926) 433-14-16</p>
          <button className="user-actions__button">заполнить анкету</button>
        </div>
      </header>
    </>
  );
}
