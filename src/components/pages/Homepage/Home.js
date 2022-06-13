
import ContentMain from "./contentMain";


import { CSSTransition } from "react-transition-group";

import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Home =(props)=>{
    const [image, setImage] = useState("");
    const imageUrlHandler = (image) => {
      setImage(image);
    };
return  <motion.div
initial={{ x: window.innerWidth}}
animate={{ x: 0 }}
exit={{x:window.innerWidth,transition:{duration:0.3}}}
>
<ContentMain  urlUpload={imageUrlHandler} />

</motion.div>
}


export default Home;