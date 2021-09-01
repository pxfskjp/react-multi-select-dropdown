import React from "react";
import ReactDOM from "react-dom";
import SelectBoxComponent from './components/SelectBoxComponent';
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return <SelectBoxComponent />
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
