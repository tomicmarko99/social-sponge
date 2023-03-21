import Disclaimer from "./components/Disclaimer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Layouts/Navbar";
import Reviews from "./components/Reviews";
import StayInTouch from "./components/StayInTouch";
import WhyChoseSP from "./components/WhyChoseSP";
import Carousel from "./components/widgets/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Disclaimer />
      <HowItWorks />
      <Carousel />
      <Reviews />
      <WhyChoseSP />
      <StayInTouch />
    </>
  );
}

export default App;
