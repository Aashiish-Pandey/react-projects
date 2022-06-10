import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(1);
  let { name, image, job, text, id } = people[index];

  function setPrevious() {
    if (index - 1 < 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function setNext() {
    if (index + 1 === people.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function setRandomNumber() {
    let randomIndex = Math.floor(Math.random() * people.length);
    setIndex(randomIndex);
  }
  return (
    <div>
      <img src={image} style={{ width: "400px", height: "400px" }} />
      <h3>{name}</h3>
      <p>{job}</p>
      <div>{text}</div>
      <button
        style={{ background: "yellow", fontSize: "20px" }}
        onClick={() => setPrevious()}
      >
        prev
      </button>
      <button
        style={{ background: "green", fontSize: "20px" }}
        onClick={() => setNext()}
      >
        next
      </button>
      <button
        onClick={() => setRandomNumber()}
        style={{ background: "red", fontSize: "20px" }}
      >
        Surprise me
      </button>
    </div>
  );
};

export default Review;
