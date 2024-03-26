import React from "react";

export function Vini(props) {
  return (
    <>
      <div class="card" id="primo">
        <div class="header" data-aos="fade-up">
          <div>
            <a class="title" href="#">
              {props.title}
            </a>
            <p class="name">PizzaJ</p>
          </div>
        </div>
        <p style={{ color: "red" }} class="description">
          {props.body}
        </p>
        <p class="description">{props.price}</p>
      </div>
    </>
  );
}

export default Vini;
