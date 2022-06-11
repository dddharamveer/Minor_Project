import { useEffect } from "react";
import { useContext, useRef} from "react";
import preprocessImage from "../pre";
import AuthContext from "../store/auth-context";
import classes from "./canvas.module.css";
const Canvas = (props) => {
  const ct = useContext(AuthContext);
  const canvasRef = useRef(null);

  const HandleCanvas = () => {
    let imageFile = new Image();
    imageFile.src = URL.createObjectURL(ct.image);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    imageFile.onload = function () {
      canvas.width = imageFile.width;
      canvas.height = imageFile.height;
      ctx.drawImage(imageFile, 0, 0);

      ctx.putImageData(preprocessImage(canvas), 0, 0);
      props.dataUrl(canvas.toDataURL("image/jpeg"));
    };
  };

  
  
  useEffect(() => {
    HandleCanvas()
  }, [props.submit===true])
  
  return (
    <div className={classes.canvas}>
      <p >Processed <br></br>Image</p>
      <canvas ref={canvasRef} className={classes["prep"]}></canvas>
    </div>
  );
};

export default Canvas;
