import React from "react";
import HomeCards from "../components/HomeCards";
import { piccards } from "../data/dummyCards";
import "../components/Dest.css";
import noMad from "../logov2.svg";

export default function Destinations() {
  return (
    <div>
      <div className="dest-hero">
        <div className="dest-container">
          <img src={noMad} alt="logo" />
          <h1>Serach bar</h1>
        </div>
      </div>
      <div className="cards">
        {piccards.map((item) => {
          return (
            <HomeCards
              key={item.id}
              img={item.url}
              title={item.title}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
}
