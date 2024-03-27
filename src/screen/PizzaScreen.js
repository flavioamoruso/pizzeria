import React, { useEffect } from "react";
import AOS from "aos";
import { Pizze } from "../components/Pizza";
import contents from "../utils/pizza";

function Animation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
}

export default function App() {
  return (
    <>
      <section id="pizza" className="bg-pizza">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ marginTop: "42px" }}>Pizze 🍕</h2>
        </div>
        <div className="position-card" style={{ marginTop: "24px" }}>
          {contents.map((contents) => (
            <Pizze
              key={contents.id}
              title={contents.title}
              body={contents.body}
              price={contents.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export { Animation };
