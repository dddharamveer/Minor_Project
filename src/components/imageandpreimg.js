import {useContext, useState } from "react";
import Canvas from "./canvas"
import Image from "./image"
import AuthContext from "../store/auth-context";


const ImageModal=(props)=>{
   
    const ctx = useContext(AuthContext);
   
    const [dataUrl, setDataUrl] = useState(null);
    const DataUrlHandler = (dataUrl) => {
        setDataUrl(dataUrl);
      };
    
    return<div>
    <Image
    dataUrl={dataUrl}
    submit={props.submit}
    texte={ctx.textHandler}
    submitset={props.SubmitHandler}
    status={props.status}
  />
   <Canvas preprocess={props.submit} dataUrl={DataUrlHandler} submit={props.submit} />
  </div>
}

export default ImageModal;
