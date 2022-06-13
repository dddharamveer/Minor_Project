
import ContentMain from "./contentMain";



import { useState } from "react";
import { motion } from "framer-motion";


const Home =()=>{
    
return  <motion.div
initial={{ x: window.innerWidth}}
animate={{ x: 0 }}
exit={{x:window.innerWidth,transition:{duration:0.3}}}
>
<ContentMain   />

</motion.div>
}


export default Home;