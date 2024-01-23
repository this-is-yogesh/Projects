import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <div className="section_1">
        <div className="input_div">
          <input placeholder="Name" />
          <input placeholder="Gender" />
          <input placeholder="Age" />
        </div>
        <button>ADD</button>
      </div>
      <div className="section_2">
        <div className="input_section2">
          <input placeholder="Search by name" />
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Gender</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <td>John</td>
            <td>Male</td>
            <td>43</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
