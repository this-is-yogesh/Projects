import { useState } from "react";
import "./App.css";
import Para from "./Para";

function App() {
  let arr = new Array(5).fill(1);
  const [current, setCurrent] = useState(null);
  const [all, setAll] = useState(false);
  let n = new Set();
  const [data, setData] = useState(new Set());

  const handleclick = (i) => {
    if (!all) setCurrent((prev) => (prev === i ? null : i));
    else
      setData((prev) => {
        let newset = new Set(prev);
        if (prev.has(i)) newset.delete(i);
        else newset.add(i);

        return newset;
      });
  };

  const dataset = () => {
    console.log(data, "dataset");
    setAll(!all);
    setData(new Set());
  };
  return (
    <>
      <h1>Accordian </h1>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
      <button
        onClick={dataset}
        style={{ color: all === true ? "red" : "black" }}
      >
        {!(all === true) ? "Enable":"Disable"} MultiSelect{" "}
      </button>
      </div>
      <div className="parent">
        {arr.map((c, index) => (
          <Para
            index={index}
            handleclick={handleclick}
            id={current}
            key={index}
            data={data}
          />
        ))}
      </div>
    </>
  );
}

export default App;
