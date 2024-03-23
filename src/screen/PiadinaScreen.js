import React from "react";
import { Piadine } from "../components/Piadina";
import contents from "../utils/piadina";
import styled from "styled-components";

const StyledPiadina = styled.div`
  background-color: var(--main);
`;

export default function App() {
  return (
    <>
      <StyledPiadina>
        <hr />
        <section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ marginTop: "14px" }}>Piadine 🌯</h2>
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
      </StyledPiadina>
    </>
  );
}
