import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import ListSaveText from "./ListSaveText";
import classes from "./SaveText.module.css";

const SaveText = (props) => {
  const ctx = useContext(AuthContext);
  let textlist = JSON.parse(localStorage.getItem("text"))
    ? JSON.parse(localStorage.getItem("text"))
    : null;

  return (
    <motion.div
      className={classes.text}
      initial={{ x: window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className={classes.navbar} onClick={props.close}>
      <p>Lists</p>
      <div className={classes.svg}></div>

      </div>
      {textlist?.numbers.map((item) => (
        <ListSaveText text={item} />
      ))}
    </motion.div>
  );
};

export default SaveText;
