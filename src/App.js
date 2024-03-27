import React from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
import PizzaScreen from "./screen/PizzaScreen";
import PiadinaScreen from "./screen/PiadinaScreen";
import PrimoScreen from "./screen/PrimoScreen";
import VinoScreen from "./screen/VinoScreen";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
