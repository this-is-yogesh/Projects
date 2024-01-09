import React from "react";

const SubmitData = ({ data }) => {
  console.log(data, "submit data");
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>Question Number - {index + 1} </td>
              <td>{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmitData;