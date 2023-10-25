import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Navbar from "./components/Navigation";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
