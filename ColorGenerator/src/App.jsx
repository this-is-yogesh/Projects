import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  const [choose, setChoose] = useState(false);

  const createHex = () => {
    const hex = "0123456789abcdef";

    let str = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 16);
      str += hex[index];
    }

    setHex(str);
  };

  const createRgb = () => {
    const rgb1 = Math.floor(Math.random() * 255);
    const rgb2 = Math.floor(Math.random() * 255);
    const rgb3 = Math.floor(Math.random() * 255);
    let str = `(${rgb1},${rgb2},${rgb3})`;
    setRgb(`rgb${str}`);
  };

  function generatecolor() {
    if (choose) createHex();
    else createRgb();
  }

  return (
    <>
      <div
        className="page"
        style={{
          backgroundColor: choose ? hex : rgb,
          height: "100vh",
          margin: "0px",
        }}
      >
        <div
          className="buttons"
          style={{ display: "flex", justifyContent: "space-evenly", gap: "5%" }}
        >
          <button onClick={() => setChoose(true)}>Create HEX Color</button>
          <button onClick={() => setChoose(false)}>Create RGB Color</button>
          <button onClick={generatecolor}>Create Random Color</button>
          <div> {choose === true ? <p> {hex}</p> : <p>{rgb} </p>}</div>
        </div>
      </div>
    </>
  );
}

export default App;
