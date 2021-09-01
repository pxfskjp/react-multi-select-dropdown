import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      objectArray: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
        { key: "Option 4", cat: "Group 2" },
        { key: "Option 5", cat: "Group 2" },
        { key: "Option 6", cat: "Group 2" },
        { key: "Option 7", cat: "Group 2" }
      ],
      selectedValues: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" }
      ]
    };
    this.style = {
      chips: {
        background: "red"
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px"
      },
      multiselectContainer: {
        color: "red"
      }
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
  }

  render() {
    const { plainArray } = this.state;
    return (
      <div className="App">
        <div className="col-12 d-md-flex">
          <div className="col-12 col-md-4 mt20 contents">
          </div>
          <div className="examples col-12 col-md-5">
            <Multiselect showArrow options={plainArray} isObject={false} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
