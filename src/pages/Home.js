import React from "react";
// import HomeCards from "../components/HomeCards";
// import { piccards } from "../data/dummyCards";
import blueCard from "../images/blueCardComplete.jpg";
import redCard from "../images/redCard.jpg";
import greenCard from "../images/greenCard.jpg";
import lastCard from "../images/lastCard.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>Discover the World in the way of NOMAD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            cumque. Temporibus fugiat magni veritatis voluptates sit similique.
            Perferendis accusantium debitis ab ipsa libero explicabo
            reprehenderit eligendi nostrum, alias qui neque.
          </p>
          <button className="primary-btn">get started</button>
        </div>
      </div>
      {/* <div className="cards">
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
      </div> */}
      <div className="welcome">
        <div className="welcome-text">
          <h2>welcome to NOMAD</h2>
          <h1>it's time to start your adenture</h1>
          <p>
            Online booking can cause many trouble if you are novice, more than
            26% of people make mistakes when booking online. Leave it up to us
            to take care of things so you can focus on what to do when you get
            to the destination
          </p>
          <button className="primary-btn">search destinations</button>
        </div>
        <div className="welcome-images">
          <div className="image">
            <img src={blueCard} alt="actions" />
          </div>
          <div className="image">
            <img src={greenCard} alt="actions" />
          </div>
          <div className="image">
            <img src={redCard} alt="actions" />
          </div>
          <div className="image">
            <img src={lastCard} alt="actions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
