import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background-color: var(--primary);
  h3 {
    color: var(--secondary);
  }
`;

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <nav className="nav">
          <div className="container nav-container">
            <header className="nav-header">
              <span className="nav-brand">
                <h3 style={{ cursor: "pointer" }}>PizzaJ</h3>
              </span>
              <span>
                <a href="#prenotazione">Prenota ora</a>
              </span>
              <span>
                <a href="#storia">La nostra storia</a>
              </span>
            </header>
          </div>
        </nav>
      </StyledNav>
    </>
  );
};

export default Navbar;
