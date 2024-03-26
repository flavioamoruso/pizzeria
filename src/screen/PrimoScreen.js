import React from "react";
import { Primi } from "../components/Primo";
import contents from "../utils/primo";

export default function App() {
  return (
    <>
      <section className="bg-primo" id="primi">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ marginTop: "42px" }}>Primi piatti 🍝</h2>
        </div>
        <div className="position-card" style={{ marginTop: "24px" }}>
          {contents.map((contents) => (
            <Primi
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
