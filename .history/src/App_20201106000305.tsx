import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";

function App() {
    return (
        <div className="App">
            <LinePlot />
            <PiePlot />
            <BarProp />
        </div>
    );
}

export default App;
