import { useContext, useState } from "react";

import classes from "./imagetotext.module.css";

import AuthContext from "../store/auth-context";
import Button from "./UI/Button";

import { motion } from "framer-motion";
import { Link, Outlet} from "react-router-dom";
import ImageModal from "./imageandpreimg";
const Imagetotext = (props) => {
  const [submit, setSubmit] = useState(false);
  const [status, setstatus] = useState(0);
  const SubmitHandler = () => {
    setSubmit((prevState) => !prevState);
  };

  const ctx = useContext(AuthContext);
  
  const statusHandler =(e)=>{
    setstatus(e.progress.toFixed(2) * 100);
    
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className={classes.imagetoText}
    >
      <div className={classes.status}>
        <p>Status</p>
        <p className={classes.statustext}>
          {status === 1 ? "completed" : status}%
        </p>
      </div>
     <ImageModal status={statusHandler} SubmitHandler={SubmitHandler} submit={submit}/>
      <div className={classes.getText}>
        <Button button={{ onClick: SubmitHandler, disabled: !ctx.image }}>
          Get text
        </Button>
      </div>
      <div className={classes.textDiv}>
        <p className={classes.extractedText}>
          {ctx.text ? ctx.text : "Sample Text here"}
        </p>
        <button onClick={ctx.textlistHandler}>save</button>
      </div>
      <Outlet/>
    </motion.div>
  );
};

export default Imagetotext;
