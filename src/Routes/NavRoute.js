import { Fragment } from "react"
import Home from "../Home";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/pages/about";


import { Routes, Route ,useLocation} from "react-router-dom";
const NavRoute = ()=>{
    
    return <Fragment>
          <Navbar/>
     
      <Routes >
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}/>
       
      </Routes>
     
    </Fragment>
}

export default NavRoute;
