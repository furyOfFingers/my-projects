import "./movieSearchStyle.css";
import React from 'react';
import ReactDOM from "react-dom";
import Header from "./headerPanel";
import SearchPanel from "./SearchPanel";
// import TableMovies from "./tableMovies";
import {
  Row
} from 'react-bootstrap';

export default class MovieSearch extends React.Component {

  render() {
    return (

      <div >
        <Header>
        </Header>
        <div className="container">
          <div className="row">
            <SearchPanel>
            </SearchPanel>

            {/* <TableMovies>
            </TableMovies> */}
          </div>
        </div>
      </div>

    )
  }
};
// ReactDOM.render(<MovieSearch />, document.getElementById("index"));