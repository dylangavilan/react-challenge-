import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import style from "./searchbar.module.css";
import { filterByRating, searchMovie } from "../../redux/actions/action";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [order, setOrder] = useState("");
  const [stars, setStars] = useState();
  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setStars(0);
    dispatch(searchMovie(input));
  }
  function filterRating(e, num) {
    e.preventDefault();
    setStars(num);
    dispatch(filterByRating(num));
    setOrder("setOrder^`");
  }
  return (
    <div className="flex justify-center pt-3">
      <div className="rounded-md">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="px-6 py-2 bg-white text-black  outline-none border-solid border-black"
            type="text"
            placeholder="title"
            onChange={(e) => handleChange(e)}
          />
          <button className="px-6 py-2 bg-black text-white" type="Submit">
            Buscar
          </button>
        </form>
      </div>
      <div className="flex justify-center align-middle items-center text-2xl">
        <span>Rating:</span>
        <AiFillStar
          className={stars >= 2 ? style.gold : style.dark}
          onClick={(e) => filterRating(e, 2)}
        />
        <AiFillStar
          className={stars >= 4 ? style.gold : style.dark}
          onClick={(e) => filterRating(e, 4)}
        />
        <AiFillStar
          className={stars >= 6 ? style.gold : style.dark}
          onClick={(e) => filterRating(e, 6)}
        />
        <AiFillStar
          className={stars >= 8 ? style.gold : style.dark}
          onClick={(e) => filterRating(e, 8)}
        />
        <AiFillStar
          className={stars >= 10 ? style.gold : style.dark}
          onClick={(e) => filterRating(e, 10)}
        />
      </div>
    </div>
  );
}
