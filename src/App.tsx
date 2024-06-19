import "./App.css";
import CustomAnimatedCursor from "./components/customAnimatedCursor";
import { useMousePosition } from "./hooks/mousePositionHook";

function App() {
  return (
    <>
      <CustomAnimatedCursor />
      <div
        className="App"
        style={{ backgroundColor: "#19311F", width: "10vw", height: "10vh" }}
      ></div>
    </>
  );
}

export default App;
