import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      try {
        axios
          .get(`https://dummyjson.com/products?limit=${limit}`)
          .then((resp) => {
            setData(resp.data.products);
          });
      } catch (error) {
        console.log("Error is ", error);
      } finally {
        setLoader(false);
      }
    }, 1000);
  }, [limit]);

  if (loader) {
    return (
      <div
        style={{
          backgroundColor: "red",
          width: "100vw",
          padding: "20px",
        }}
      >
        {" "}
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          {" "}
          Wait, the products are loading !{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="products">
        {data &&
          data.map((d) => (
            <div key={d.id} className="main">
              <h2>{d.title}</h2>
              <div className="images">
                <img src={d.images[0]} w={50} h={50} alt="image" />
              </div>
            </div>
          ))}
      </div>
      <div className="load-button">
        <button
          onClick={() => setLimit((prev) => prev + 20)}
          disabled={limit >= 99}
          // style={{ backgroundColor: limit >=99 ? "red" : "blue" }}
        >
          Load More Button{" "}
        </button>
      </div>
    </div>
    // <div className="parent">
    //   {data.map((d) => (
    //     <div key={d.id} className="main">
    //       <h2>{d.title}</h2>
    //       <div className="images">
    //         <img src={d.images[0]} w={50} h={50} alt="image" />
    //       </div>
    //     </div>
    //   ))}
    //   <button
    //     onClick={() => setLimit((prev) => prev + 40)}
    //     disabled={limit >= 99}
    //     // style={{ backgroundColor: limit >=99 ? "red" : "blue" }}
    //   >
    //     Load More Button{" "}
    //   </button>
    // </div>
  );
}

export default App;
