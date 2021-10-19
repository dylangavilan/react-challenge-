import axios from "axios";
export function getAll() {
  return async function (dispatch) {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=9d291dac73aad9fc4eb3630ed5a890d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    );
    dispatch({ type: "GET_MOVIES", payload: movies.data.results });
  };
}
export function filterByRating(rating) {
  return {
    type: "FILTER_RATING",
    payload: rating,
  };
}
export function searchMovie(input) {
  return async function (dispatch) {
    if (input) {
      const moviesFiltered = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9d291dac73aad9fc4eb3630ed5a890d8&language=en-US&query=${input}&page=1&include_adult=false`
      );
      console.log("action", moviesFiltered.data);
      dispatch({ type: "SEARCH_MOVIES", payload: moviesFiltered.data.results });
    } else {
      const moviesFiltered = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=9d291dac73aad9fc4eb3630ed5a890d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate"
      );
      dispatch({ type: "SEARCH_MOVIES", payload: moviesFiltered.data.results });
    }
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    const movieDetail = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9d291dac73aad9fc4eb3630ed5a890d8&language=en-US`
    );
    dispatch({ type: "MOVIE_DETAIL", payload: movieDetail.data });
  };
}
