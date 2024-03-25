import React from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
import PizzaScreen from "./screen/PizzaScreen";
import PiadinaScreen from "./screen/PiadinaScreen";
import PrimoScreen from "./screen/PrimoScreen";
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
      </section>
    </>
  );
}

export default App;
