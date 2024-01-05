import React from "react";
import { useState } from "react";
const Parent = ({ data }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="parent">
      {data &&
        data.map((i, index) => {
          return (
            <div key={index + i} className="container">
              <div className="label">
                <p> {i.label}</p>
                {i.children && (
                  <button
                    onClick={() => {
                      setHide(!hide);
                    }}
                  >
                    {hide ? "-" : "+"}
                  </button>
                )}
              </div>
              {i.children && hide && <Parent data={i.children} />}
            </div>
          );
        })}
    </div>
  );
};

export default Parent;
