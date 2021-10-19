import React, { useState, useEffect } from "react";
import Cards from "../cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/actions/action";
const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div className="flex justify-between">
      {movies.length > 0 ? (
        <div>
          {movies?.map((c) => {
            return <Cards props={c} />;
          })}
        </div>
      ) : (
        <div>no hay peliculas</div>
      )}
    </div>
  );
};

export default Home;
