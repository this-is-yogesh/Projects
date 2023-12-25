import { useState } from "react";
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [hover, setHover] = useState(false);
  const [filled, setFilled] = useState([]);
  const [index,setIndex] = useState(0);
  const [ click,setClick] = useState(0)

  const handlemouseenter = (i) => {
    setIndex(i)
    let cnt = 0;
    let arr = count;
    while (cnt < i) {
      arr[cnt] = 0;
      cnt++;
    }
    setCount(arr);
    setFilled(arr);
    setHover(true);
  };

  const handlemouseleave = () => {
    let i = click  ;

    let arr = count;
    while(i < count.length){
        arr[i] = i;
        i++;
    }
    setCount(arr);
    //setCount([1,2,3,4,5,6,7,8,9,10]);
  };

  const handleclick = () => {
    setClick(index);
    let cnt = 0;
    let arr = count;
    while (cnt < index) {
      arr[cnt] = 0;
      cnt++;
    }
    setCount(arr);
    setFilled(arr);
   
  };
  return (
    <>
      <div className="stars">
        {count.map((ie, index) => (
          <i
            className={ie === 0 ? "pi pi-star-fill" : "pi pi-star"}
            onClick={() => handleclick(ie)}
            onMouseEnter={() => handlemouseenter(ie)}
            onMouseLeave={handlemouseleave}
            style={{ fontSize: "2rem" }}
            key={index}
          >
            {" "}
          </i>
        ))}
      </div>
    </>
  );
}

export default App;
