import React from 'react';
import ReactDOM from "react-dom";
import { ButtonProject } from "./buttonProject";

export class MainDiv extends React.Component {
  constructor() {
    super();
   
  }
  render() {
    return (
      <div className="mainDiv">
        <div className="leftMenu">
          <ButtonProject />
        </div>
        <div id="contentHere" className="mainContainer">
        </div>
      </div>
    )
  }
};
ReactDOM.render(<MainDiv />, document.getElementById("index"));