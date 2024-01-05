import React from "react";
import { useState } from "react";
import Children from "./Children";
const Parent = ({ data }) => {

  return (
    <div className="parent">
      {data &&
        data.map((i, index) => {
          return (
            <div key={index + i}>
              <Children item={i} />
            </div>
          );
        })}
    </div>
  );
};

export default Parent;
