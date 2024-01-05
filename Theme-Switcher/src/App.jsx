import { useState } from "react";
import "./App.css";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, setTheme] = useTheme("theme","dark");

  return (
    <div className="theme-mode" variable-theme={theme}>
      <div className="container">
        <h2>Hello</h2>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {" "}
          Change theme
        </button>
      </div>
    </div>
  );
}

export default App;
