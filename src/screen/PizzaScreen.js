import React from "react";
import { Pizze } from "../components/Pizza";
import contents from "../utils/pizza";
import styled from "styled-components";

const StyledPizze = styled.div`
  background-color: var(--primary);
`;

export default function App() {
  return (
    <>
      <StyledPizze>
        <hr />
        <section id="pizza">
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
      </StyledPizze>
    </>
  );
}
