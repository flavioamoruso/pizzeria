import React from "react";
import { Primi } from "../components/Primo";
import contents from "../utils/primo";
import styled from "styled-components";

const StyledPrimo = styled.div`
  background-color: var(--primary);
`;

export default function App() {
  return (
    <>
      <StyledPrimo>
        <section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ marginTop: "14px" }}>Primi piatti 🍝</h2>
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
      </StyledPrimo>
    </>
  );
}
