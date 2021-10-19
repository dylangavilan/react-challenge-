import { Route } from "react-router-dom";
import Home from "./components/homeLanding/homeLanding";
import SearchBar from "./components/searchbar/SearchBar";
import MovieDetail from "./components/MovieDetail/Detail";
import NavBar from "./components/nav/Nav";
function App() {
  return (
    <div className="bg-gray-300  min-w-full min-h-full">
      <Route path="/">
        <NavBar />
      </Route>
      <Route exact path="/">
        <SearchBar />
        <Home></Home>
      </Route>
      <Route exact path="/moviedetail/:id">
        <MovieDetail></MovieDetail>
      </Route>
    </div>
  );
}

export default App;
