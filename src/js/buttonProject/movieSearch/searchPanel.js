import React from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import {
  Grid, Row, Col, DropdownButton, MenuItem, FormGroup, FormControl, Button, Form, Table
} from 'react-bootstrap';

const myTry = [
  {
    "id": 1,
    "picture": "",
    "title": "nigth!",
    "format": "kino",
    "genre": "comedy",
    "year": "2010",
    "rating": 9,
  },
  {
    "id": 2,
    "picture": "",
    "title": "over again!",
    "format": "kino",
    "genre": "thriller",
    "year": "1998",
    "rating": 7,
  },
  {
    "id": 3,
    "picture": "",
    "title": "next day",
    "format": "serial",
    "genre": "adventure",
    "year": "2005",
    "rating": 8.4,
  },
  {
    "id": 4,
    "picture": "",
    "title": "next day 2",
    "format": "serial",
    "genre": "adventure",
    "year": "2006",
    "rating": 8.9,
  },
  {
    "id": 5,
    "picture": "",
    "title": "little Timmi",
    "format": "film",
    "genre": "drama",
    "year": "2001",
    "rating": 8,
  }
]
export default class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      results: [],
    }
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }
  handleSearchButtonClick() {
    const searchValue = this.state.searchValue;
    if (searchValue !== "") {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=37662c76ffc19e5cd1b95f37d77155fc&language=ru-US&query=' + searchValue + '&page=1&include_adult=false')
        .then((response) => {
          console.log("Results movies list");
          console.log(response.data.results);
          this.setState({
            results: response.data.results
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  handleSearchInputChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }
  render() {

    return (
      <Form inline>

        <Grid>
          <Row className="show-grid">
            <Col md={2} >
              <DropdownButton id="#" title="Format">
                <MenuItem eventKey="1">film</MenuItem>
                <MenuItem eventKey="2">another film</MenuItem>
                <MenuItem eventKey="3">little more another film</MenuItem>
              </DropdownButton>
            </Col>
            <Col md={2} >
              <DropdownButton id="#" title="Genre">
                <MenuItem eventKey="1">feature film</MenuItem>
                <MenuItem eventKey="2">short film</MenuItem>
                <MenuItem eventKey="3">action</MenuItem>
                <MenuItem eventKey="4">adventure</MenuItem>
                <MenuItem eventKey="4">comedy</MenuItem>
              </DropdownButton>
            </Col>
            <Col md={2} >
              <DropdownButton id="#" title="Year">
                <MenuItem eventKey="1">2017</MenuItem>
                <MenuItem eventKey="2">2016</MenuItem>
                <MenuItem eventKey="3">2015</MenuItem>
                <MenuItem eventKey="4">2014</MenuItem>
              </DropdownButton>
            </Col>
            <Col md={4} mdOffset={2} >
              <FormGroup className="toRight">
                <FormControl value={this.state.searchValue} onChange={this.handleSearchInputChange} className="borderRadiusInput" type="text" />
                <Button onClick={this.handleSearchButtonClick} className="borderRadiusButton">Search</Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
        <Table className="tableMarginTop" striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Title</th>
              <th>Format</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {
              myTry.map((item, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td >{item.title}</td>
                    <td>{item.format}</td>
                    <td>{item.genre}</td>
                    <td>{item.year}</td>
                    <td>{item.rating}</td>
                  </tr>
                    )
                } )
            }
                </tbody>
            </Table>
      </Form>
          )
        }
};