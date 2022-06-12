import {useContext, useState } from "react";


import AuthContext from "../store/auth-context";
import classes from './imageandpreimg.module.css'


const ImageModal=(props)=>{
   
    const ctx = useContext(AuthContext);
   
    return<div className={classes.inside}>
        <img
          src={ctx.image && URL.createObjectURL(ctx.image)}
          className={classes.img}
        />
 <img src={props.dataUrl} alt="" />
  </div>
}

export default ImageModal;
