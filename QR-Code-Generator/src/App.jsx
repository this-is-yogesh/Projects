import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState(null);
  const [qrvalue, setQR] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    setQR(value);
    setValue("");
  };

  function handlereset() {
    setQR(null);
  }
  return (
    <div className="qr-code">
      <h2>QR-Code-Generator</h2>
      <form onSubmit={handlesubmit} className="form">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button onClick={handlereset}> Reset QR_CODE</button>
      </form>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        {qrvalue && (
          <QRCode
            size={256}
            style={{ height: "100%", maxWidth: "500px", width: "100%" }}
            value={qrvalue}
            viewBox={`0 0 256 256`}
          />
        )}
      </div>
    </div>
  );
}

export default App;
