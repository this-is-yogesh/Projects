import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentcolor, setCurrentColor] = useState("green");
  const light = {
    red: {
      backgroundColor: "red",
      duration: 4000,
      next: "yellow",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 3000,
      next: "green",
    },
    green: {
      backgroundColor: "green",
      duration: 2000,
      next: "red",
    },
  };

  useEffect(() => {
    const { duration, next } = light[currentcolor];
    const timer = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [currentcolor]);

  return (
    <div className="wrapper">
      {Object.keys(light).map((m) => (
        <div
          className="traffic-light"
          style={{
            backgroundColor:
              light[m].backgroundColor === currentcolor &&
              light[m].backgroundColor,
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
