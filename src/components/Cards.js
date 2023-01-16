import React from "react";
import "./Cards.css";
import { Card } from "react-bootstrap";
import { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineAim } from "react-icons/ai";

const Cards = (props) => {
  const [input, setInput] = useState("");
  const inputFeild = useRef(input);
  const sendCityName = (item) => {
    props.getCityName(item);
  };
  const cities = ["france", "africa", "qatar", "japan"];

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const searchCustomCity = () => {
    props.getCityName(input);
    inputFeild.current.value = "";
  };

  const enterFunc = (e) => {
    if (e.keyCode === 13) {
      props.getCityName(input);
      inputFeild.current.value = "";
    }
  };
  return (
    <>
      <div className="bottom-section">
        <div className="searchBar">
          <button
            id="searchQuerySubmit"
            type="submit"
            onClick={(city) => {
              searchCustomCity();
            }}
          >
            <FiSearch style={{ fontSize: "2rem", color: "#72c5cb" }} />
          </button>
          <input
            ref={inputFeild}
            id="searchQueryInput"
            type="text"
            onChange={(e) => {
              handleInput(e);
            }}
            onKeyDown={(e) => {
              enterFunc(e);
            }}
            placeholder="Search Location"
          />
          <AiOutlineAim
            style={{
              fontSize: "2rem",
              color: "#cdc0c0",
              marginLeft: "-3.5rem",
              marginTop: "0.6rem",
            }}
          />
        </div>

        <div className="cards-main-div">
          {cities.map((item, index) => (
            <Card
              className={`${item}-card`}
              key={index}
              onClick={() => {
                sendCityName(item);
              }}
            >
              {item.toUpperCase()}
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
