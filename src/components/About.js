import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/animationPizza.json";

const StyledAbout = styled.div`
  background-color: var(--main);
`;

const About = () => {
  return (
    <>
      <StyledAbout>
        <section id="storia">
          <div className="home-hero">
            <div className="home-hero-text">
              <div className="home-hero-title">
                <p className="brand-color">Salve a tutti</p>
                <h3 className="brand-color">
                  Benvenuti nella nostra pizzeria digitale
                </h3>
              </div>

              <p>
                Sono molto orgoglioso di presentarmi questa idea nata da
                semplici ragazzi che hanno realizzato il loro sogno
              </p>
              <p>
                Qui sotto puoi trovare tutto il nostro menu' alla portata di
                tutti
              </p>
            </div>
            <div className="home-hero-img">
              <Lottie
                className=""
                options={{
                  loop: true,
                  autoplay: true,
                  reverse: true,
                  animationData,
                }}
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>
      </StyledAbout>
    </>
  );
};

export default About;