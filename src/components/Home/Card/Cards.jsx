import React from "react";
import "./Cards.scss";
import CardItem from "../../CardItem/CardItem";

const Cards = () => {
  return (
    <div className="card-container" data-testid="card-container">
      <h1>A bit about us</h1>
      <div className="card">
        <div className="wrapper">
          <ul className="items">
            <CardItem
              src="/images/home/AMI07620.webp"
              text={
                "Our well-designed environment supports child's growth and development"
              }
              label="Our Environment"
              path="/our-environment"
              alt="Our Environment"
            />
            <CardItem
              src="/images/home/AMI05179.webp"
              text="World class infrastructure for holistic development of the child"
              label="Our Facilities"
              path="/play-equipment"
              alt="Our Facilities"
            />
            <CardItem
              src="/images/home/AMI07643.webp"
              text="Our age appropriate programmes that grow with your child"
              label="Our Programmes"
              path="/programmes"
              alt="Our Programmes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
