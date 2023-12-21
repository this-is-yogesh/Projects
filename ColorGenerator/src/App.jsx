import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <div className="buttons">
          <button>Create HEX Color</button>
          <button>Create RGB Color</button>
          <button>Create Random Color</button>
        </div>
      </div>
    </>
  );
}

export default App;
