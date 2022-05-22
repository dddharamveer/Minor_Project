import React, { useRef, useState } from "react";

const AuthContext = React.createContext({
  image: null,
  ImageChange(){},
  imageRef:null,
});

export const AuthContextProvide = (props) => {
  const [Image, setImage] = useState(null);
  const imageRef = useRef(null);
  
  const ImageChange = (e) => {
   
     
    setImage(e.target.files[0]);

   
   
    // img.src=URL.createObjectURL(event.target.files[0])
    // setImage(img);
    // console.log(event.target.files);
  };
  return (
    <AuthContext.Provider
      value={{
        image: Image,
        ImageChange:ImageChange,
        imageRef:imageRef
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
