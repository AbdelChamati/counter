import React, { useState } from "react";
import "./App.css";

function App() {
  /* eslint no-eval: 0 */

  const [data, setData] = useState("");
  const calcBtns = [];

  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setData(data + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      <div className="show-input">{data}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button "Clear" */}
        <button onClick={() => setData(data.substring(0, data.length - 1))}>
          Clear
        </button>
        {/* Clear all "AC" */}
        <button onClick={() => setData("")}>AC</button>
      </div>
      <div className="operations subgrid">
        {/* ADD btn "+" */}
        <button onClick={(e) => setData(data + e.target.value)} value="+">
          +
        </button>
        {/* MINUS btn "-" */}
        <button onClick={(e) => setData(data + e.target.value)} value="-">
          -
        </button>
        {/* MULTIPLAY btn "*" */}
        <button onClick={(e) => setData(data + e.target.value)} value="*">
          *
        </button>
        {/* SUBSTRACT btn "/" */}
        <button onClick={(e) => setData(data + e.target.value)} value="/">
          /
        </button>
        {/* EQUAL btn "=" */}
        <button
          onClick={(e) => {
            try {
              setData(
                String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                  ? String(eval(data).toFixed(4))
                  : String(eval(data))
              );
            } catch (err) {
              console.log(err);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
