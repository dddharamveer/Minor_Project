import { useContext, useState } from "react";
import Tesseract from "tesseract.js";
import AuthContext from "../store/auth-context";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./imagetotext.module.css";
import { Ripple } from "react-awesome-spinners";
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

 
  const [submit, setSubmit] = useState(false);
  const [copy, setCopy] = useState("copy");
  const [inside, setInside] = useState(false);

  

  const insideHandler = () => {
    setInside((prev) => !prev);
  };
  

  
  //for running the function based to states
 
  const SubmitHandler = () => {
   setSubmit(true)
    handleClick();
    
  };

 
  let isLoading=  submit;
  console.log(isLoading);
 // Function to run tesseract and get text from it
 const handleClick = () => {
  
  Tesseract.recognize(dataUrl, "eng", {
    logger: (m) => {
      console.log(m);
      
      
    },
  }).then(({ data: { text } }) => {
    setSubmit(false)
    ctx.textHandler(text);
    console.log(text);
  });
};

  
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

  const copyHandler=()=>{
    ctx.text?navigator.clipboard.writeText(ctx.text):alert("no text ");
    setCopy("Copied")
    setTimeout(() => {
      setCopy("Copy")
    }, 2000);
  }
  return (
    
    <motion.div
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      
      variants={variants}
      className={classes.imagetoText}
    >
      

      <div className={classes.navbar}>
        <div className={classes["backbutton"]} onClick={() => navigate(-1)}>
       
        </div>
        
        <p className={`${classes.navNumber} ${classes.mainNavNumber}`}>Saved - {}</p>
        <p className={classes.navText}>Convert Images to text</p>
       
      </div>
      <div className={classes.midDiv}>
        <button className={classes.getTextButton}onClick={SubmitHandler}>Get text</button>
        {isLoading&&<Ripple color="#9772FB" className={classes.loader} />}
        </div>
      
       
       
        <div className={classes.textDiv}>
          <div className={classes.textDivNavbar} onClick={copyHandler}>
            <p className={`${classes.navNumber} ${classes.getTextNavNumber}`}>{copy}</p>
          </div>
        <p className={classes.extractedText}>
          {ctx.text ? ctx.text : "Sample Text here"}
        </p>
        <div className={classes.convertMore}>
        <button onClick={ctx.textlistHandler}>Save</button>
        <Link to="/" className={classes.AddMore}>Add more</Link>
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
