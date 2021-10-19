import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetail } from "../../redux/actions/action";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const stateMovie = useSelector((state) => state.movieDetail);
  const { id } = useParams();
  console.log(stateMovie);
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  return (
    <div>
      <div className="flex justify-center  container  mx-auto px-4 rounded-xl mt-7 border-black bg-gray-400  p-5">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${stateMovie.poster_path}`}
            alt={stateMovie.title}
            className="max-w-sm m-0 rounded-lg"
          ></img>
        </div>
        <div>
          <div className="text-4xl font-serif text-center mb-4 ">
            <h1 className="">{stateMovie.title}</h1>
          </div>
          <h3 className="text-2xl text-center mb-6 font-semibold">
            {stateMovie.tagline}
          </h3>
          <p className="font-mono text-xl overflow-ellipsis mx-3 mt-2">
            <span className="font-bold text-xl "> Description:</span>{" "}
            {stateMovie.overview}
          </p>
          <p className="font-mono text-xl overflow-ellipsis mx-3 mt-2">
            <span className="font-bold text-xl">Adult:</span>
            {stateMovie.adult ? "+18" : "+13"}
          </p>
          <p className="font-bold text-xl overflow-ellipsis mx-3 mt-2">
            Genre:{" "}
            {stateMovie.genres?.map((c) => {
              return (
                <span className="font-mono text-xl overflow-ellipsis  ">
                  {c.name}{" "}
                </span>
              );
            })}
          </p>
          <p className="font-mono text-xl overflow-ellipsis mx-3 mt-2">
            <span className="font-bold text-xl">Duration:</span>
            {stateMovie.runtime}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
