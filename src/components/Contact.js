import React, { useEffect } from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  background-color: var(--main);
  height: 370px;
`;

const Contact = () => {
  return (
    <>
      <StyledContact>
        <form action="https://formspree.io/f/myyrneyo" method="POST">
          <div class="contact-form">
            <span id="prenotazione" className="heading">
              Prenota qui sotto
            </span>

            <label for="name">Nome:</label>
            <input
              type="text"
              placeholder="Tamarindo"
              name="name"
              required=""
            />
            <label for="email">Numero:</label>
            <input
              type="number"
              name="number"
              required=""
              placeholder="+39 3889087651"
            />
            <button
              className="btn"
              type="submit"
              style={{ marginRight: "12px" }}
            >
              Invia
            </button>
          </div>
        </form>
      </StyledContact>
    </>
  );
};

export default Contact;
