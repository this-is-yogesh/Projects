import React from "react";
import "./App.css";

function Para({ id, handleclick, index, data }) {
  return (
    <div className="outerbox">
      {id === index || (data && data.has(index)) ? (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          magnam! Quasi vel inventore amet sint, obcaecati porro possimus fuga
          facilis, tempora corrupti dolor in odit voluptas temporibus expedita.
          Molestiae, unde. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Assumenda ipsam quae iste rem eius deserunt blanditiis
          doloremque, iure perspiciatis, esse eum qui quod vitae aliquid
          architecto consectetur aut amet. Inventore!
        </p>
      ) : (
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      )}
      <span onClick={() => handleclick(index)}> + </span>
    </div>
  );
}

export default Para;
