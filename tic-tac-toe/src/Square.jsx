import React, { useState } from "react";

const Square = ({ value, handleclick }) => {
  return <button onClick={handleclick}>{value}</button>;
};

export default Square;
