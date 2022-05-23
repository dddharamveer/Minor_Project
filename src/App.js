
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/pages/about";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
