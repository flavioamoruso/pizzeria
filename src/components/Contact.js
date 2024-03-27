import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  background-color: var(--main);
  height: 50vh;
`;

const Contact = () => {
  return (
    <>
      <StyledContact>
        <form>
          {/* <input placeholder="Nome" type="text" className="input" />

          <input placeholder="Nome" type="text" className="input" /> */}

          <div class="contact-form">
            <span class="heading">Prenota qui sotto</span>

            <label for="name">Name:</label>
            <input type="text" required="" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required="" />
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
