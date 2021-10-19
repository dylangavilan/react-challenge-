const initialState = {
  allMovies: [],
  movies: [],
  movieDetail: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        allMovies: action.payload,
        movies: action.payload,
      };
    }
    case "SEARCH_MOVIES": {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case "FILTER_RATING": {
      let moviesNew = state.allMovies;
      moviesNew = moviesNew.filter(
        (c) =>
          c.vote_average <= action.payload &&
          c.vote_average >= action.payload - 2
      );
      return {
        ...state,
        movies: moviesNew,
      };
    }
    case "MOVIE_DETAIL": {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
export default rootReducer;
