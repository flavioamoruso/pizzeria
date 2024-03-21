import React from "react";
import Navbar from "./components/Navbar";
import { Slider } from "./components/Slider";
import About from "./components/About";
function App() {
  return (
    <>
      <section>
        <Navbar />
        <Slider />
        <About />
      </section>
    </>
  );
}

export default App;
