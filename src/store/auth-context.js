import React, { useRef, useState } from "react";

const AuthContext = React.createContext({
  image: null,
  ImageChange(){},
  imageRef:null,
  text:null,
  textHandler(){},
  textlistHandler(){}
});

export const AuthContextProvide = (props) => {
  const [Image, setImage] = useState(null);
  const imageRef = useRef(null);
  const [text,setText]=useState(null)
  const ImageChange = (e) => {
   
     
    setImage(e.target.files[0]);

   
   
    // img.src=URL.createObjectURL(event.target.files[0])
    // setImage(img);
    // console.log(event.target.files);
  };
  const textHandler = (t) => {
    setText(t);
  };


  let textlist = JSON.parse(localStorage.getItem("text"))
    ? JSON.parse(localStorage.getItem("text"))
    : { numbers: [] };
  console.log(textlist);
  const handler = () => {
    if (textlist.numbers) {
    
      textlist.numbers.push(text);
    }
    console.log(textlist);
    localStorage.setItem("text", JSON.stringify(textlist));
  };
  return (
    <AuthContext.Provider
      value={{
        image: Image,
        ImageChange:ImageChange,
        imageRef:imageRef,
        text:text,
        textHandler:textHandler,
        textlistHandler:handler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
