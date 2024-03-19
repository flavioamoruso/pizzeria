import React from "react";
import styled from "styled-components";

const StyledProva = styled.div`
  background-color: red;
`;

const Prova = () => {
  return (
    <>
      <StyledProva>
        <div>
          <h2>Ciao belli</h2>
          <p>Hola</p>
        </div>
      </StyledProva>
    </>
  );
};

export default Prova;
