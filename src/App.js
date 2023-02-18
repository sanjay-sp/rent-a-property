import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./components/Pages/Favorites";
import Rent from "./components/Pages/Rent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rent />}></Route>
          <Route exact path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
