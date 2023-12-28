import { useState } from "react";
import "./App.css";
import { data } from "./data";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

function App() {
  const [da, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setData(data);
    setCurrent(1);
  }, []);

  function handleslideleft(id) {
    setCurrent(id === 0 ? data.length - 1 : id - 1);
  }

  function handleslideright(id) {
    setCurrent(id === data.length - 1 ? 0 : id + 1);
  }

  function handleclick(id) {
    setCurrent(id);
  }
  console.log(current, "current");
  return (
    <div className="main">
      <FaArrowLeft className="left" onClick={() => handleslideleft(current)} />
      <div className="imagebox">
        {da.map((d, index) => (
          <>
            <div className="image">
              <img
                src={d.url}
                alt="img"
                key={d.id}
                hidden={index !== current}
              />
            </div>
          </>
        ))}
        <div className="circle">
          {da.map((_, index) => (
            <FaCircle
              className={index === current ? "active" : ""}
              onClick={() => handleclick(index)}
            />
          ))}
        </div>
      </div>

      <FaArrowRight
        className="right"
        onClick={() => handleslideright(current)}
      />
    </div>
  );
}

export default App;
