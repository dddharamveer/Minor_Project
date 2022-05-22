import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>multiverse</div>
      <div className={classes.links}>
        <a>about</a>
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
