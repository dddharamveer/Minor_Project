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
  if (menuButton && innerWidth < 800) {
    links = classes["linksShow"];
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes["logoDiv"]}>
        {innerWidth < 800 && (
          <p onClick={HandleMobileButton} className={classes.mobileIcon}></p>
        )}
        <Link className={classes.logo} to="/">
          studio
        </Link>
      </div>
      <div className={`${classes.links} ${links}` } onClick={HandleMobileButton}>
        <ul className={classes.linksList}>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">githib</Link>
          </li>
          {/* <li>
            <div className={classes.switchDiv}>
              <input type="checkbox" id="switch" className={classes.switch} />
              <label htmlFor="switch" className={classes.switch}>
                Toggle
              </label>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
