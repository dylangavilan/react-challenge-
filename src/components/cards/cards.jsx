import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ props }) => {
  return (
    <div className="inline-flex mx-2 justify-between">
      <div className=" my-4 max-w-sm border-black border-2 border-solid">
        <div className="w-60">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            alt={props.title}
            className="w-60"
          ></img>
          <span className="align-center">{props.title}</span>
        </div>
        <button className="max-w-full px-30 text-center m-0 bg-gray-600 text-black">
          <Link to={`/moviedetail/${props.id}`}>View info</Link>
        </button>
        <span> Rating:{props.vote_average}</span>
      </div>
    </div>
  );
};
export default Cards;
