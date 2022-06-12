// import { useContext, useEffect, useState } from "react";

// import AuthContext from "../store/auth-context";
// import classes from "./image.module.css";

// const Image = (props) => {
//   const [first, setfirst] = useState(0)
//   const ctx = useContext(AuthContext);
//   const handleClick = () => {
//     props.submitset();
//     Tesseract.recognize(props.dataUrl, "eng", {
//       logger: (m) => {
//         console.log(m);
//         props.status(m);
//         setfirst(m.progress)

//       },
//     }).then(({ data: { text } }) => {
//       setfirst(0)
//       props.texte(text);
//       console.log(text);
//     });

    
//   };


  
 
//   if(first===0 && props.submit ){
//     handleClick();
//   }
 
   

//   return (
//     <div className={classes.imageDiv}>
//       <p>Image</p>
//       <div className={classes.img}>
//         <img
//           src={ctx.image && URL.createObjectURL(ctx.image)}
//           className={classes.img}
//         />
//       </div>
      
//     </div>
//   );
// };

// export default Image;
