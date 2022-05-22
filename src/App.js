import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import { CSSTransition } from "react-transition-group";
import Imagetotext from "./components/imagetotext";

import "./App.css";

import ContentMain from "./components/contentMain";

function App() {
  const [image, setImage] = useState("");
  const imageUrlHandler = (image) => {
    setImage(image);
  };
  return (
    <div className="App">
    <Navbar/>
    <ContentMain  urlUpload={imageUrlHandler} />
    <Imagetotext image={image} />
    </div>
  );
}

export default App;
