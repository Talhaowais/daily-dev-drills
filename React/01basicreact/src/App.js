import { useState, useEffect } from "react";
import "./app.css";
import { Home } from "./components/Home";
import { Dinning } from "./components/Dinning";

function App() {
  const [counter, setCounter] = useState(0);
  let num = 0;
  const [menu, setMenu] = useState("Home");

  useEffect(() => {
    console.log("talha: ", counter);
  }, [num]);

  useEffect(() => {
    console.log("Aahmad: ", counter);
  }, [counter]);

  return (
    <div className="talha">
      <button
        onClick={() => {
          console.log(num);
          num++;
        }}
      >
        Increment {num}
      </button>
      <button
        onClick={() => {
          setMenu("Home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setMenu("Dinning");
        }}
      >
        {" "}
        Dinning
      </button>
      {menu === "Home" && <Home />}
      {menu === "Dinning" && <Dinning />}
    </div>
  );
}

export default App;
