import React from "react";
import { useState,useEffect } from "react";


const useTheme = (key, defaultvalue) => {
  //The initial state is set using the function provided as an argument to useState.
  const [value, setValue] = useState(() => {
    let currentvalue;
    try {
     
    } catch (error) {
        throw new Error("This is error");
    }

    return currentvalue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useTheme;
