import React from 'react';
import ReactDOM from "react-dom";
import {
  Form,Table
} from 'react-bootstrap';

export default class TableMovies extends React.Component {
  render() {
    return (
      <Form>
            <Table className="tableMarginTop" striped bordered condensed hover responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Format</th>
                  <th>Genre</th>
                  <th>Year</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>pict1</td>
                  <td>Title1</td>
                  <td>Format</td>
                  <td>Genre</td>
                  <td>Year</td>
                  <td>Rating</td>
                </tr>
                <tr>
                  <td>pict1</td>
                  <td>Title1</td>
                  <td>Format</td>
                  <td>Genre</td>
                  <td>Year</td>
                  <td>Rating</td>
                </tr>
                <tr>
                  <td>pict1</td>
                  <td >Title1</td>
                  <td>Format</td>
                  <td>Genre</td>
                  <td>Year</td>
                  <td>Rating</td>
                </tr>
                <tr>
                  <td>pict1</td>
                  <td >Title1</td>
                  <td>Format</td>
                  <td>Genre</td>
                  <td>Year</td>
                  <td>Rating</td>
                </tr>
                <tr>
                  <td>pict1</td>
                  <td >Title1</td>
                  <td>Format</td>
                  <td>Genre</td>
                  <td>Year</td>
                  <td>Rating</td>
                </tr>
              </tbody>
            </Table>
            </Form>
    )
  }
};