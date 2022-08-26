import "./App.css";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filters/Filter/Filter";
import SearchBar from "./components/Filters/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
