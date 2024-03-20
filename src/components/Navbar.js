import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background-color: #fff7df;
  h3 {
    color: #f24822;
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
                <a href="#menu">Menu'</a>
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

{
  /* <nav className="nav">
  <div className="container nav-container">
    <header className="nav-header">
      <Link to="/" className="nav-brand">
        <h3>My Porfolio</h3>
      </Link>
      <div>
        <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
          <FaBars className="nav-icon" />
        </button>
      </div>
    </header>
    <LinkComponent classLink="nav-links" />
    <Switch />
    <SocialComponent classLink="social-top" />
  </div>
</nav>; */
}
