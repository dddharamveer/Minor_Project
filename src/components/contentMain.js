import { useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./contentMain.module.css";
const ContentMain = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.mainDiv}>
      <div className={classes.svgDiv} >
        <p>Convert Images <br/> to <br/>Text</p>
        <div className={classes.svg}></div>
      </div>
      <div className={classes.Button}>
        <input
          type="file"
          onChange={ctx.ImageChange}
          id="file1"
          className={classes.file}
          accept="image/*"
        />
        <label htmlFor="file1" className={classes.labelFile}>
          Select file
        </label>
      </div>
    </div>
  );
};

export default ContentMain;
