
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { Routes, Route ,useLocation} from "react-router-dom";
import Home from "./Home";
import About from "./components/pages/about";
import Imagetotext from "./components/imagetotext";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { AnimatePresence } from "framer-motion";

function App() {
  const location =useLocation()
  const ctx = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        {ctx.image && <Route path='/text'  element={<Imagetotext/>}/>}
        
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
