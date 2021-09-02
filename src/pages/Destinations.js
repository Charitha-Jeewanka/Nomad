import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SearchForm from "../components/SearchForm";

// cards
//import HomeCards from "../components/HomeCards"; //structure
// import Loading from "../components/Loading";

//styling
import "../styles/Dest.css";
import "../styles/Cards.css";
import noMad from "../logov2.svg";

export default function Destinations() {
  const [cards, setCards] = useState([
    {
      url: "",
      title: "",
      price: "",
      duration: "",
      ratings: "",
    },
  ]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCards(jsonRes));
  });

  function deleteCard(id) {
    axios.delete("delete/" + id);
    alert("card deleted");
  }

  return (
    <div>
      <div className="dest-hero">
        <div className="dest-container">
          <img src={noMad} alt="logo" />
          <h1>Search Form</h1>
        </div>
      </div>
      <div className="add-link">
        <Link to="/create" className="link-btn">
          Create New
        </Link>
      </div>
      <div className="cards">
        {cards.map((item) => {
          return (
            <div className="card">
              <img src={item.url} alt="charitha" />
              <div className="card-body">
                <h2>{item.title}</h2>

                <div className="blocks-container">
                  <div className="block">
                    <h4>price</h4>
                    <h5>{item.price}</h5>
                  </div>
                  <div className="block">
                    <h4>duration</h4>
                    <h5>{item.duration}</h5>
                  </div>
                  <div className="block">
                    <h4>ratings</h4>
                    <h5>{item.ratings}</h5>
                  </div>
                </div>
                <div className="btn-center">
                  <Link className="secondary-btn">View more</Link>
                  <br />
                  <button
                    className="link-btn"
                    onClick={() => deleteCard(item._id)}
                  >
                    delete
                  </button>
                  <br />
                  <Link to="/CRUD" className="link-btn">
                    edit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
