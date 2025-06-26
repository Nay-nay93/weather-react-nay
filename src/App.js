import React, {useState} from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {

  const [unit, setUnit] = useState("celsius");
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rome" unit={unit} setUnit={setUnit} />
      </div>
    </div>
  );
}
