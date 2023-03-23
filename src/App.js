import Disclaimer from "./components/Disclaimer";
import FAQsAndContact from "./components/FAQsAndContact";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Layouts/Navbar";
import Reviews from "./components/Reviews";
import StayInTouch from "./components/StayInTouch";
import WhyChoseSP from "./components/WhyChoseSP";
import Footer from "./components/Layouts/Footer";
import JumpToTop from "./components/Layouts/JumpToTop";
import AsignTasks from "./components/AsignTasks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Disclaimer />
      <HowItWorks />
      <AsignTasks />
      <Reviews />
      <WhyChoseSP />
      <StayInTouch />
      <FAQsAndContact />
      <JumpToTop />
      <Footer />
    </>
  );
}

export default App;
