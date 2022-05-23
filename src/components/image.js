import { useContext, useEffect, useState } from "react";

import Tesseract from "tesseract.js";
import AuthContext from "../store/auth-context";
import classes from "./image.module.css";

const Image = (props) => {
  const [first, setfirst] = useState(0)
  const ctx = useContext(AuthContext);
  const handleClick = () => {
    Tesseract.recognize(props.dataUrl, "eng", {
      logger: (m) => {
        console.log(m);
        props.status(m);
        setfirst(m.progress)
      },
    }).then(({ data: { text } }) => {
      props.texte(text);
      console.log(text);
    });
  };


  
  if (props.submit) {
  if(first===0 ){
    handleClick();
  }
    props.submitset();
  }

  return (
    <div className={classes.imageDiv}>
      <p>Image</p>
      <div className={classes.img}>
        <img
          src={ctx.image && URL.createObjectURL(ctx.image)}
          className={classes.img}
        />
      </div>
      
    </div>
  );
};

export default Image;
