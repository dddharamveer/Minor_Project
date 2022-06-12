import { useContext, useState } from "react";
import HandleImage from "./image";

import Tesseract from "tesseract.js";
import classes from "./imagetotext.module.css";
import Canvas from "./canvas"
import AuthContext from "../store/auth-context";
import Button from "./UI/Button";
import Image from "./image"
import { motion } from "framer-motion";
import { Routes, useNavigate,Route } from "react-router-dom";
import ImageModal from "./imageandpreimg";
import NothingFound from "./pages/NothingFound";
const Imagetotext = (props) => {
  
  const [dataUrl, setDataUrl] = useState(null);
  const DataUrlHandler = (dataUrl) => {
      setDataUrl(dataUrl);
    };
  
  const [submit, setSubmit] = useState(false);
  const [status, setstatus] = useState(0);
  const [inside,setInside] = useState(false);
  const SubmitHandler = () => {
    setSubmit((prevState) => !prevState);
  };

  const ctx = useContext(AuthContext);
  
  const statusHandler =(e)=>{
    setstatus(e.progress.toFixed(2) * 100);
    
  }
const insideHandler = ()=>{
setInside(prev=>!prev)
}
const navigate = useNavigate();
const [first, setfirst] = useState(0)

const handleClick = () => {
 SubmitHandler()
  Tesseract.recognize(dataUrl, "eng", {
    logger: (m) => {
      console.log(m);
      setstatus(m);
      setfirst(m.progress)

    },
  }).then(({ data: { text } }) => {
    setfirst(0)
    ctx.textHandler(text);
    console.log(text);
  });

  
};




if(first===0 && submit ){
  handleClick();
}



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className={classes.imagetoText}
    >
      {/* <div className={classes.status}>
        <p>Status</p>
        <p className={classes.statustext}>
          {status === 1 ? "completed" : status}%
        </p>
      </div> */}
      
      
      <div className={classes.navbar}>
        <div className={classes["backbutton"]} onClick={() => navigate(-1)}> </div>
        <div className={classes["info"]} onClick={insideHandler}>i</div>
      </div>

      <div className={classes.getText}>
        <button onClick={SubmitHandler} >
          Get text
        </button>
      </div>
      <div className={classes.textDiv}>
        <p className={classes.extractedText}>
          {ctx.text ? ctx.text : "Sample Text here"}
        </p>
        <button onClick={ctx.textlistHandler}>save</button>
      </div>
   { inside &&
    <ImageModal dataUrl={dataUrl}status={statusHandler} SubmitHandler={SubmitHandler} submit={submit}/>}
        {/* <Image

    submit={submit}
    texte={ctx.textHandler}
    submitset={SubmitHandler}
    status={statusHandler}
  />
   */}
      <Canvas preprocess={submit} dataUrl={DataUrlHandler} submit={props.submit} />
    </motion.div>
  );
};

export default Imagetotext;
