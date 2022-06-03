import { useContext, useRef, useState } from "react";
import Image from "./image";
import classes from "./imagetotext.module.css";
import Canvas from "./canvas";
import AuthContext from "../store/auth-context";
import Button from "./UI/Button";
import { recognize } from "tesseract.js";
import { AnimatePresence, motion } from "framer-motion";

const Imagetotext = (props) => {
  const [canvas, setCanvas] = useState(false);
  const [dataUrl, setDataUrl] = useState(null);

  const [submit, setSubmit] = useState(false);

  const DataUrlHandler = (dataUrl) => {
    setDataUrl(dataUrl);
  };
  const SubmitHandler = () => {
    setSubmit((prevState) => !prevState);
  };

  const [text, setText] = useState("");
  const ctx = useContext(AuthContext);
  const textHandler = (t) => {
    setText(t);
  };
 const statusHandler=(e)=>{
 setstatus((e.progress.toFixed(2))*100);
 }
  const [status, setstatus] = useState(0)
 
  
  return (
    <AnimatePresence >
    <motion.div 
    initial={{ x: window.innerWidth}}
    animate={{ x: 0 }}
    
    
    className={classes.imagetoText}>
      <div className={classes.status}>
        <p>Status</p>
        <p className={classes.statustext}>{status===1?"completed":status}%</p>
      </div>
      <Image
        dataUrl={dataUrl}
        submit={submit}
        texte={textHandler}
        submitset={SubmitHandler}
        status={statusHandler}
      />
      <Canvas preprocess={canvas} dataUrl={DataUrlHandler} submit={submit} />
      <div className={classes.getText}>
        <Button button={{ onClick: SubmitHandler, disabled: !ctx.image }}>
          Get text
        </Button>
      </div>
      <p className={classes.extractedText}>{text?text:"Sample Text here"}</p>
    </motion.div>
    </AnimatePresence>
  );
};

export default Imagetotext;
