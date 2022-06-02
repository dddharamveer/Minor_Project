
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
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>
<ContentMain  urlUpload={imageUrlHandler} />
{/* <Imagetotext image={image} /> */}
</motion.div>
}


export default Home;