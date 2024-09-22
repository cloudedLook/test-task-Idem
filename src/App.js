import Header from "./components/header/header.jsx";
import TalentSlider from "./components/talent-slider/slider.jsx";
import Vacancies from "./components/vacancies/vacancies.jsx";
import Footer from "./components/footer/footer.jsx";

import "./styles/normalize.css";

export default function App() {
  return (
    <>
      <Header />
      <TalentSlider />
      <Vacancies />
      <Footer />
    </>
  );
}
