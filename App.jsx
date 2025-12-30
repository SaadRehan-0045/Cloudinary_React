import { useSelector } from "react-redux";

import Child1 from "./Child1";
import ImageUpload from "./ImageUpload";
function App() {
  const counterValue = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>App Component - Counter: {counterValue}</h1>
      <Child1 />
      <ImageUpload />
    </div>
  );
}

export default App;