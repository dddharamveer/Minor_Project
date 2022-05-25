import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [menuButton, setMenuButton] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);

  const innerHandler = () => {
    setinnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", innerHandler);
  let links;
  const HandleMobileButton = () => {
    setMenuButton((prev) => !prev);
   
  };
  if(menuButton && innerWidth<800){
    links=classes['linksShow'];
  }
  return (
    <nav className={classes.navbar }>
      <div className={classes["logoDiv"]}>
        <Link className={classes.logo} to="/">
          ANT
        </Link>
        {innerWidth < 800 && (
          <p onClick={HandleMobileButton} className={classes.mobileIcon}></p>
        )}
      </div>
      <div className={`${classes.links} ${links}`}>
        <Link to="/about">about</Link>
        <a>github</a>
        <div className={classes.switchDiv}>
          <input type="checkbox" id="switch" className={classes.switch} />
          <label htmlFor="switch" className={classes.switch}>Toggle</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
