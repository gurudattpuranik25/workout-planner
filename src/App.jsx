import Home from "./pages/Home/Home";
import "./App.css";
import Exercises from "./pages/Exercises/Exercise";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </>
  );
}

export default App;
