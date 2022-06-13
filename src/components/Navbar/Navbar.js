import { useState } from "react";
import { Link } from "react-router-dom";
import SaveText from "../pages/SaveText";
import classes from "./Navbar.module.css";
import { AnimatePresence } from "framer-motion";
const Navbar = (props) => {
  const [menuButton, setMenuButton] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  const [textList, setTextList] = useState(false);

  const innerHandler = () => {
    setinnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", innerHandler);
  let links;
  const HandleMobileButton = () => {
    setMenuButton((prev) => !prev);
  };
  if (menuButton && innerWidth < 800) {
    links = classes["linksShow"];
  }

  const textlistHandler = () => {
    setTextList((prev) => !prev);
  };
  return (
    <nav className={classes.navbar}>
      <div className={classes["logoDiv"]}>
        {innerWidth < 800 && (
          <p onClick={HandleMobileButton} className={classes.mobileIcon}></p>
        )}
        <Link className={classes.logo} to="/">
          gminacs
        </Link>
        <div className={classes.textList} onClick={textlistHandler}></div>
      </div>

      <div className={`${classes.links} ${links}`} onClick={HandleMobileButton}>
        <ul className={classes.linksList}>
          <Link className={classes.RouteLink} to="/about">
            about
          </Link>

          <Link className={classes.RouteLink} to="/">
            github
          </Link>
        </ul>
        
      </div>
      <AnimatePresence>
          {textList && <SaveText close={textlistHandler} />}
        </AnimatePresence>
    </nav>
  );
};

export default Navbar;
