import { useState } from "react";
import "./App.css";
import question from "./data.js";
import SubmitData from "./SubmitData";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [last, setLast] = useState(false);

  function addanswer(id, d) {
    let copy = [...userAnswer];
    copy[id] = d;
    setUserAnswer(copy);
  }

  console.log(userAnswer[1],"ua")

  return (
    <div className="questions">
      {question.map((d, index) => (
        <div key={index} hidden={currentIndex !== index}>
          <span> {d.label}</span>
          <div>
            {d.options.map((data, index) => (
              <div
                style={{ marginLeft: "10px", cursor: "pointer",color:(userAnswer[d.id] === data ? "green":"black")  }}
                onClick={() => addanswer(d.id, data)}
                key={index + data}
              >
                {data}{" "}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              hidden={currentIndex === question.length - 1}
            >
              Next{" "}
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              hidden={currentIndex === 0}
            >
              Back{" "}
            </button>
            <button
              hidden={!(currentIndex === question.length - 1)}
              onClick={() => setLast(true)}
            >
              Submit
            </button>
          </div>
        </div>
      ))}
      {last && <SubmitData data={userAnswer} />}
    </div>
  );
}

export default App;
