import React, { useState } from "react";
import Parent from "./Parent";

const Children = ({ item }) => {
  const [display, setDisplay] = useState({});

  function handletoggle(l) {
    setDisplay({ ...display, [l]: !display[l] });
  }

  return (
    <div>
      <div className="label">
        <p>{item.label}</p>
        {item.children && (
          <button onClick={() => handletoggle(item.label)}>
            {display[item.label] ? "-" : "+"}
          </button>
        )}
      </div>
      {item.children && display[item.label] && (
        <div>
          <Parent data={item.children} />
        </div>
      )}
    </div>
  );
};

export default Children;
