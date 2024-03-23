import React from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
import PizzaScreen from "./screen/PizzaScreen";
function App() {
  return (
    <>
      <section>
        <Navbar />
        <Slider />
        <About />
        <PizzaScreen />
      </section>
    </>
  );
}

export default App;
