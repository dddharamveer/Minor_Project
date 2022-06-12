import { useContext, useState,useRef } from "react";
import { useDimensions } from "./use-dimensions";

import AuthContext from "../store/auth-context";
import classes from "./imageandpreimg.module.css";
import {motion} from 'framer-motion'
const ImageModal = (props) => {
  const ctx = useContext(AuthContext);
  const sidebar = {
    
    open:{
      clipPath: "circle(100vh at 50% 95%)",
      transition: {
        ease: "linear",
        duration:.5
      }
    }
  ,
    closed: {
      clipPath: "circle(5% at 50% 95%)",
      transition: {
        ease: "linear",
        duration:.4
        
       
      }
    }
  }


  return (
    <motion.div className={classes.inside}
    initial={"closed"}
    animate={ "open"}
    exit={"closed"}
    
   
    variants={sidebar}
    >
      <div className={classes.insideDiv}>
      <div className={classes.mainImage}>
        <p>Image</p>
      <img
        src={ctx.image && URL.createObjectURL(ctx.image)}
      />
      </div>
      <div className={classes.mainImage}>
        <p>preprocessed image</p>
      <img src={props.dataUrl} alt="" />
      </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;
