import React from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
import PizzaScreen from "./screen/PizzaScreen";
import PiadinaScreen from "./screen/PiadinaScreen";
import PrimoScreen from "./screen/PrimoScreen";
import VinoScreen from "./screen/VinoScreen";
import Contact from "./components/Contact";
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
      </section>
    </>
  );
}

export default App;
