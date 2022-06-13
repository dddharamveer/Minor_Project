

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import NothingFound from "./components/pages/NothingFound";
import NavRoute from "./Routes/NavRoute";

import Imagetotext from "./components/ImageToText/imagetotext";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext)
  const location = useLocation();
  return (
    
    <div className="App">
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NavRoute/>}/>
        <Route path='/text'  element={ctx.image?<Imagetotext/>:<NothingFound/>}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
