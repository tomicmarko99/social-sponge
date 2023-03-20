import Disclaimer from "./components/Disclaimer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Layouts/Navbar";
import Reviews from "./components/Reviews";
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
    </>
  );
}

export default App;
