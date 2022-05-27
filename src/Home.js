
import ContentMain from "./components/contentMain";


import { CSSTransition } from "react-transition-group";
import Imagetotext from "./components/imagetotext";
import { useState } from "react";

const Home =(props)=>{
    const [image, setImage] = useState("");
    const imageUrlHandler = (image) => {
      setImage(image);
    };
return  <div>
<ContentMain  urlUpload={imageUrlHandler} />
{/* <Imagetotext image={image} /> */}
</div>
}


export default Home;