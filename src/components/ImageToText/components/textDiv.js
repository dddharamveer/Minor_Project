import { useContext,useState } from "react";
import { Link } from "react-router-dom"
import classes from '../imagetotext.module.css'
import AuthContext from "../../../store/auth-context";
const TextDiv = ()=>{

    const ctx = useContext(AuthContext);

    const [copy, setCopy] = useState("copy");
    const copyHandler = () => {
        ctx.text ? navigator.clipboard.writeText(ctx.text) : alert("no text ");
        setCopy("Copied");
        setTimeout(() => {
          setCopy("Copy");
        }, 2000);
      };
    return  <div className={classes.textDiv}>
    <div className={classes.textDivNavbar} onClick={copyHandler}>
      <p className={`${classes.navNumber} ${classes.getTextNavNumber}`}>
        {copy}
      </p>
    </div>
    <p className={classes.extractedText}>
      {ctx.text ? ctx.text : "No Text available"}
    </p>
    <div className={classes.convertMore}>
      <button onClick={ctx.textlistHandler}>Save</button>
      <Link to="/" className={classes.AddMore}>
        Add more
      </Link>
    </div>
  </div>
}


export default TextDiv;