
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import { Routes, Route ,useLocation} from "react-router-dom";
import Home from "./Home";
import About from "./components/pages/about";
import Imagetotext from "./components/imagetotext";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { AnimatePresence } from "framer-motion";
import NothingFound from "./components/pages/NothingFound";
import SaveText from "./components/pages/SaveText";
import ImageModal from "./components/imageandpreimg";

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
        { <Route path='/text'  element={ctx.image ?<Imagetotext/>:<NothingFound/>}/>}
       
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
