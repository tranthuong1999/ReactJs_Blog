import { useRef, useState, useEffect } from "react";
import "./styles.css";

function Post() {
  // THis ref will be connected to the orange box
  const boxRef = useRef();

  // X
  const [x, setX] = useState();

  // Y
  const [y, setY] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);

    const y = boxRef.current.offsetTop;
    setY(y);
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <h1>KindaCode.com</h1>
        <h3>This is some summy content</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
          nulla a leo tristique rhoncus. Aliquam venenatis elit at pharetra
          aliquet. Cras sed varius arcu. Fusce elementum ipsum at tristique
          sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          cursus nulla a leo tristique rhoncus. Aliquam venenatis elit at
          pharetra aliquet. Cras sed varius arcu. Fusce elementum ipsum at
          tristique sodales. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam cursus nulla a leo tristique rhoncus. Aliquam venenatis elit
          at pharetra aliquet. Cras sed varius arcu. Fusce elementum ipsum at
          tristique sodales.
        </p>
      </div>
      <div className="box" ref={boxRef}>
        <h1>Position: </h1>
        <h2>X: {x ?? "No result"}</h2>
        <h2>Y: {y ?? "No result"}</h2>
      </div>
    </div>
  );
}

export default Post;
