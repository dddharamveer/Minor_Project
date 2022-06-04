
import ContentMain from "./components/contentMain";


import { CSSTransition } from "react-transition-group";
import Imagetotext from "./components/imagetotext";
import { useState } from "react";
import { motion } from "framer-motion";

const Home =(props)=>{
    const [image, setImage] = useState("");
    const imageUrlHandler = (image) => {
      setImage(image);
    };
return  <motion.div
initial={{ x: window.innerWidth}}
animate={{ x: 0 }}
exit={{x:window.innerWidth,transition:{duration:0.1}}}
>
<ContentMain  urlUpload={imageUrlHandler} />
</motion.div>
}


export default Home;