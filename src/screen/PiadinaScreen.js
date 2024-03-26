import React from "react";
import { Piadine } from "../components/Piadina";
import contents from "../utils/piadina";

export default function App() {
  return (
    <>
      <section className="bg-piadina" id="piadina">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ marginTop: "42px" }}>Piadine 🌯</h2>
        </div>
        <div className="position-card" style={{ marginTop: "24px" }}>
          {contents.map((contents) => (
            <Piadine
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
