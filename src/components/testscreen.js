import * as React from "react";
 
import { useScreenshot } from "use-screenshot-hook";
 
const Example = () => {
  const { image, takeScreenshot } = useScreenshot();
  console.log(typeof(image),image);
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={() => takeScreenshot()}>screenshot</button>
      {image && <img src={image} />}
    </div>
  );
};
export default Example;