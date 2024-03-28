import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
import PizzaScreen from "./screen/PizzaScreen";
import PiadinaScreen from "./screen/PiadinaScreen";
import PrimoScreen from "./screen/PrimoScreen";
import VinoScreen from "./screen/VinoScreen";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <>
      {isLoading == true ? (
        <Loader />
      ) : (
        <section>
          <Navbar />
          <Slider />
          <About />
          <PizzaScreen />
          <PiadinaScreen />
          <PrimoScreen />
          <VinoScreen />
          <Contact />
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;
