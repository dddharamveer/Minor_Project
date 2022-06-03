
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/pages/about";
import Imagetotext from "./components/imagetotext";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        {ctx.image && <Route path='/text'  element={<Imagetotext/>}/>}
        
      </Routes>
    </div>
  );
}

export default App;
