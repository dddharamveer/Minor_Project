import { useNavigate } from 'react-router-dom'
import classes from '../imagetotext.module.css'

const NavBar =()=>{
    let textlist = JSON.parse(localStorage.getItem("text"))
    ? JSON.parse(localStorage.getItem("text"))
    : { numbers: [] };
    const navigate = useNavigate();

    return  <div className={classes.navbar}>
    <div
      className={classes["backbutton"]}
      onClick={() => navigate(-1)}
    ></div>

    <p className={`${classes.navNumber} ${classes.mainNavNumber}`}>
      Saved - {textlist.numbers.length}
    </p>
    <p className={classes.navText}>Convert Images to text</p>
  </div>
}


export default NavBar;