import "./footer.css";
import Logo from "../logo/logo";
import facebook from "../../assets/icons/facebook.svg";
import vk from "../../assets/icons/vk.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <FooterActions />
        <FooterInformation />
      </footer>
    </>
  );
}

function FooterActions() {
  return (
    <>
      <section className="footer-actions">
        <Logo />
        <h2 className="share">поделиться</h2>
        <article className="social-media">
          <img src={facebook} alt="" />
          <img src={vk} alt="" />
        </article>
      </section>
    </>
  );
}

function FooterInformation() {
  return (
    <>
      <section className="information">
        <p className="caption information__item">© Гросс маркет 2020</p>
        <p className="policy information__item">
          Политика обработки персональных данных
        </p>
        <div className="information__transparent"></div>
      </section>
    </>
  );
}
