import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState(() => {
    return "end";
  });

  const [limit,setLimit] = useState(15)
  const [width,setWidth] = useState(()=>{
    return 0;
  })

  useEffect(() => {
    const handlescroll = () => {
      let isbottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if(window.scrollY <200){
          setMsg("200 height")
      }
      if (isbottom) {
        setLimit((prev)=>prev+10)
        setWidth((prev)=>prev+10)
      }
    };

    window.addEventListener("scroll", handlescroll);

    axios
      .get(`https://dummyjson.com/products?limit=${limit}&skip=10`)
      .then((res) => setData(res.data.products));
  }, [limit]);

  return (
    <div>
      <div className="line" style={{width:"100vw",height:"10px",backgroundColor:"red",position:"fixed",top:"0",left:"0"}}>
        <div className="inline" style={{width:`${width}%`,height:"10px",backgroundColor:"blue"}}>

        </div>
      </div>
      {data && data.map((d) => <p key={d.id}>{d.title} </p>)}
      {msg && <p style={{color:"red"}}>{msg}</p>}
    </div>
  );
}

export default App;
