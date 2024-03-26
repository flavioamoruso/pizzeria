import React from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
import PizzaScreen from "./screen/PizzaScreen";
import PiadinaScreen from "./screen/PiadinaScreen";
import PrimoScreen from "./screen/PrimoScreen";
import VinoScreen from "./screen/VinoScreen";
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
      </section>
    </>
  );
}

export default App;
