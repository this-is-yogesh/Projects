import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import backgroundImage from "./assets/download.jpeg"
import menus from "./data";

function App() {
  const [data, setData] = useState(menus);

  const showdata = (index) => {
    if (data[index].children && data[index].children.length) {
      setData(data[index].children);
    }
  };

  console.log(data, "Data");
  return (
    <>


      <div style={{backgroundImage:`url(${bannerImage})`}}>


      {data &&
        data.map((i, index) => {
          return (
            <div key={index} className="container">
              <p> {i.label}</p>
              <button onClick={() => showdata(index)}> + </button>
            </div>
          );
        })}
      </div>

    </>
  );
}

export default App;
