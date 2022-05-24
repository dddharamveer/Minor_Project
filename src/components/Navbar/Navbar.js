import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.logo} to='/'>asbmk</Link>
      <div className={classes.links}>
        <Link to="/about">about</Link>
        <a>github</a>
        {/* <div className={classes.switchDiv}>
          <input type="checkbox" id="switch" className={classes.switch} />
          <label htmlFor="switch" className={classes.switch}>Toggle</label>
        </div> */}
        
      </div>
    </nav>
  );
};

export default Navbar;
