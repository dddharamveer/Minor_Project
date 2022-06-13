import { useContext, useState } from "react";
import Tesseract from "tesseract.js";
import AuthContext from "../../store/auth-context";

import { AnimatePresence, motion } from "framer-motion";
import classes from "./imagetotext.module.css";
import { Ripple } from "react-awesome-spinners";
import Canvas from "./canvas";
import ImageModal from "./imageandpreimg";
import TextDiv from "./components/textDiv";
import NavBar from "./components/NavBar";
const Imagetotext = (props) => {
  const ctx = useContext(AuthContext);

  //Provide data URL

  const [dataUrl, setDataUrl] = useState(null);
  const DataUrlHandler = (dataUrl) => {
    setDataUrl(dataUrl);
  };

  const [submit, setSubmit] = useState(false);
  const [inside, setInside] = useState(false);

  const insideHandler = () => {
    setInside((prev) => !prev);
  };

  //for running the function based to states

  const SubmitHandler = () => {
    setSubmit(true);
    handleClick();
  };

  let isLoading = submit;
  console.log(isLoading);
  // Function to run tesseract and get text from it
  const handleClick = () => {
    Tesseract.recognize(dataUrl, "eng", {
      logger: (m) => {
        console.log(m);
      },
    }).then(({ data: { text } }) => {
      setSubmit(false);
      ctx.textHandler(text);
      console.log(text);
    });
  };

  const variants = {
    open: {
      opacity: 1,
      transition: {
        ease: "anticipate",
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      variants={variants}
      className={classes.imagetoText}
    >
      <NavBar />
      <div className={classes.midDiv}>
        <button className={classes.getTextButton} onClick={SubmitHandler}>
          Get text
        </button>
        {isLoading && <Ripple color="#9772FB" className={classes.loader} />}
      </div>

      <TextDiv />

      <div className={classes["imagesModal"]} onClick={insideHandler}>
        <p></p>
      </div>
      <AnimatePresence>
        {inside && <ImageModal dataUrl={dataUrl} isOpen={inside} />}
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
