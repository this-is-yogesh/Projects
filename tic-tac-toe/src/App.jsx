import { useEffect, useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStaus] = useState(null);
  const [values, setValues] = useState(new Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [caption, setCaption] = useState("");

  function handleclick(id) {
    let squares = [...values];
    if (checkwinner(squares) || squares[id]) return;
    squares[id] = status ? "X" : "O";
    setValues(squares);
    setStaus(!status);
  }

  function checkwinner(squares) {
    let possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 3, 6],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibilities.length; i++) {
      let [x, y, z] = possibilities[i];
      console.log(x, y, z);
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return false;
  }

  useEffect(() => {
    if (!checkwinner(values) && values.every((i) => i !== ""))
      setCaption("This is draw");
    else if (checkwinner(values)) {
      setCaption(`${checkwinner(values)} is Winner`);
    } else {
      setCaption(`Next player is - ${status === true ? "X" : "O"} `);
    }
  }, [values, status]);

  function handlereset() {
    setValues(new Array(9).fill(""));
  }
  return (
    <>
      <div className="mainbox">
        <div className="box">
          <Square handleclick={() => handleclick(0)} value={values[0]} />
          <Square handleclick={() => handleclick(1)} value={values[1]} />
          <Square handleclick={() => handleclick(2)} value={values[2]} />
        </div>
        <div className="box">
          <Square handleclick={() => handleclick(3)} value={values[3]} />
          <Square handleclick={() => handleclick(4)} value={values[4]} />
          <Square handleclick={() => handleclick(5)} value={values[5]} />
        </div>
        <div className="box">
          <Square handleclick={() => handleclick(6)} value={values[6]} />
          <Square handleclick={() => handleclick(7)} value={values[7]} />
          <Square handleclick={() => handleclick(8)} value={values[8]} />
        </div>
      </div>
      {checkwinner(values) && <button onClick={handlereset}> Reset</button>}
      <span>{caption}</span>
    </>
  );
}

export default App;
