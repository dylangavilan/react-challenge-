import React from "react";
import { Button } from "react-bootstrap";

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
        <Button variant="primary" size="lg" active>
          <Link to={`/moviedetail/${props.id}`}>View info</Link>
        </Button>
      </div>
    </div>
  );
};
export default Cards;
