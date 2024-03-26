import React from "react";
import { Vini } from "../components/Vino";
import contents from "../utils/vino";

export default function App() {
  return (
    <>
      <section id="vini" className="bg-vino">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ marginTop: "42px" }}>Vini </h2>
        </div>
        <div className="position-card" style={{ marginTop: "24px" }}>
          {contents.map((contents) => (
            <Vini
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
