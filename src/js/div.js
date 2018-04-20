import React from 'react';
import ReactDOM from "react-dom";

class Element extends React.Component{
  render(){
    return(
      <div>
        <h4 className="main">element {this.props.name}1</h4>
      </div>
    )
  }
};
export default Element;