import { useContext, useState } from "react";
import Tesseract from "tesseract.js";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./imagetotext.module.css";

import Canvas from "./canvas";
import ImageModal from "./imageandpreimg";

const Imagetotext = (props) => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  //Provide data URL

  const [dataUrl, setDataUrl] = useState(null);
  const DataUrlHandler = (dataUrl) => {
    setDataUrl(dataUrl);
  };

  const [first, setfirst] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [status, setstatus] = useState(0);
  const [inside, setInside] = useState(false);

  const SubmitHandler = () => {
    setSubmit((prevState) => !prevState);
  };
  const statusHandler = (e) => {
    setstatus(e.progress.toFixed(2) * 100);
  };

  const insideHandler = () => {
    setInside((prev) => !prev);
  };

  // Function to run tesseract and get text from it
  const handleClick = () => {
    SubmitHandler();
    Tesseract.recognize(dataUrl, "eng", {
      logger: (m) => {
        console.log(m);
        setstatus(m);
        setfirst(m.progress);
      },
    }).then(({ data: { text } }) => {
      setfirst(0);
      ctx.textHandler(text);
      console.log(text);
    });
  };

  //for running the function based to states
  if (first === 0 && submit) {
    handleClick();
  }
  
  const  variants = {
    
    open:{
      opacity:1,
      transition: {
        ease: "anticipate",
        duration:.5,
      
      }
    }
  ,
    closed: {
      opacity:0,
      transition: {
        ease: "anticipate",
        duration:.4
        
       
      }
    }
  }
  return (
    <motion.div
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      
      variants={variants}
      className={classes.imagetoText}
    >
      {/* <div className={classes.status}>
        <p>Status</p>
        <p className={classes.statustext}>
          {status === 1 ? "completed" : status}%
        </p>
      </div> */}

      <div className={classes.navbar}>
        <div className={classes["backbutton"]} onClick={() => navigate(-1)}>
       
        </div>
        <p className={`${classes.navNumber} ${classes.mainNavNumber}`}>Saved - 1</p>
        <p className={classes.navText}>Convert Images to text</p>
       
      </div>

      <div className={classes.getText}>
        <button className={classes.getTextButton}onClick={SubmitHandler}>Get text</button>
        <div className={classes.textDiv}>
          <div className={classes.textDivNavbar}>
            <p className={`${classes.navNumber} ${classes.getTextNavNumber}`}>Copy</p>
          </div>
        <p className={classes.extractedText}>
          {ctx.text ? ctx.text : "Sample Text here"}
        </p>
        <div className={classes.convertMore}>
        <button onClick={ctx.textlistHandler}>Save</button>
        <button onClick={ctx.textlistHandler}>Add more</button>
        </div>
        
      </div>
      </div>
     
      <div className={classes["imagesModal"]} onClick={insideHandler}>
         <p></p>
        </div> 
<AnimatePresence>
      {inside && (
        <ImageModal
          dataUrl={dataUrl}
          isOpen={inside}
        />
      )}
     </AnimatePresence>
      <Canvas
        preprocess={submit}
        dataUrl={DataUrlHandler}
        submit={props.submit}
      />
    </motion.div>
  );
};

export default Imagetotext;
