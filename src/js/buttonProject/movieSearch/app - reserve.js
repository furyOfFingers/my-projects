import React from 'react';
import ReactDOM from "react-dom";

import {
  Navbar, Header, NavItem, NavDropdown, MenuItem, Nav,
  Breadcrumb, Label, ResponsiveEmbed, embed, Media, Form,
  FormGroup, ControlLabel, FormControl, Button, Grid, InputGroup,
  DropdownButton, Table, Row, Col
} from 'react-bootstrap';
import axios from 'axios';

const MOVIES = [
  {
    "vote_count": 2,
    "id": 494061,
    "video": false,
    "vote_average": 7,
    "title": "Hello!",
    "popularity": 1.657401,
    "poster_path": "/8oVa20YGZMi3INlVFkCl453Cs21.jpg",
    "original_language": "te",
    "original_title": "Hello!",
    "genre_ids": [
      28,
      10751,
      10402,
      10749
    ],
    "backdrop_path": "/2aqzHMZBv2MayQ57i3M27mZPF11.jpg",
    "adult": false,
    "overview": "",
    "release_date": "2017-12-22"
  },
  {
    "vote_count": 77,
    "id": 14030,
    "video": false,
    "vote_average": 6.8,
    "title": "Хеллоу, Долли!",
    "popularity": 5.793033,
    "poster_path": "/6VDANRGpRb4VGo5q0anoav5CoU7.jpg",
    "original_language": "en",
    "original_title": "Hello, Dolly!",
    "genre_ids": [
      35,
      10751,
      10402,
      10749
    ],
    "backdrop_path": "/7dk68tDxfAadbsJ4aPuMOEwbC3i.jpg",
    "adult": false,
    "overview": "Нью-Йорк. 1890 год. «Миссис Долли Левай, организует знакомства в атмосфере элегантности и утонченности с целью заключения брака!» Такими словами начинается этот киномюзикл.  Простая история о свахе, которая находит всем мужей и жен и не забывает про себя, превращена в феерическое шоу с участием актеров, певцов и танцоров.",
    "release_date": "1969-12-12"
  },
  {
    "vote_count": 9,
    "id": 20365,
    "video": false,
    "vote_average": 3.7,
    "title": "Hello",
    "popularity": 1.474447,
    "poster_path": "/lzldL8ZBARt0vt6FdY4ahmIyXRD.jpg",
    "original_language": "en",
    "original_title": "Hello",
    "genre_ids": [
      18
    ],
    "backdrop_path": "/hkOA2f11NYjkNZBowK1zefaoo01.jpg",
    "adult": false,
    "overview": "",
    "release_date": "2008-10-10"
  },
  {
    "vote_count": 1,
    "id": 446289,
    "video": false,
    "vote_average": 5,
    "title": "Hello Again",
    "popularity": 3.567754,
    "poster_path": "/bHHt3HIr7MpYiRSw1XNxZm3B3cn.jpg",
    "original_language": "en",
    "original_title": "Hello Again",
    "genre_ids": [
      18,
      10402,
      10749
    ],
    "backdrop_path": "/18STSjlbP0v8eE5kfkNEAsHC2dm.jpg",
    "adult": false,
    "overview": "",
    "release_date": "2017-11-08"
  },
  {
    "vote_count": 203,
    "id": 320588,
    "video": false,
    "vote_average": 6.4,
    "title": "Здравствуйте, меня зовут Дорис",
    "popularity": 9.144476,
    "poster_path": "/f9PY84x0p1RZwa1NgDYCtKWAN2D.jpg",
    "original_language": "en",
    "original_title": "Hello, My Name Is Doris",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "backdrop_path": "/vMwMgSjFKsGbXhW6Nvy517ipMUo.jpg",
    "adult": false,
    "overview": "Дорис Миллер - типичный Нью-Йоркский офисный работник в возрасте за шестьдесят, после смерти своей матери начинает посещать семинары по самопомощи. Приняв советы от гуру мотивации, Дорис становится сексуально одержимой своим новым коллегой Джоном, который вдвое её моложе.",
    "release_date": "2015-11-27"
  },
  {
    "vote_count": 2,
    "id": 225281,
    "video": false,
    "vote_average": 4.3,
    "title": "Hello Carter",
    "popularity": 2.59787,
    "poster_path": "/tB7iUajuKihS1IzBTA41SHoiSVP.jpg",
    "original_language": "en",
    "original_title": "Hello Carter",
    "genre_ids": [
      18,
      35
    ],
    "backdrop_path": "/c9qfb8yMZIYumnSaGln3DbclVaD.jpg",
    "adult": false,
    "overview": "",
    "release_date": "2013-10-11"
  },
  {
    "vote_count": 16,
    "id": 35151,
    "video": false,
    "vote_average": 5,
    "title": "Снова привет",
    "popularity": 3.32546,
    "poster_path": "/xmGWJyH5PcHUEFuqwGx9xTDS1qW.jpg",
    "original_language": "en",
    "original_title": "Hello Again",
    "genre_ids": [
      14,
      18,
      35,
      878,
      10749
    ],
    "backdrop_path": "/mBnl9Or1XNAIbRMb3WRkEqudCq7.jpg",
    "adult": false,
    "overview": "Люси замужем за пластическим хирургом Джейсоном, но ее счастливая семейная жизнь однажды дает трещину. Проще говоря, Люси умирает. Но год спустя после своей преждевременной кончины Люси воскрешает из мертвых ее сестра — колдунья Зельда. Женщине приходится приспосабливаться к изменившимся обстоятельствам, так как Джейсон женился на ее лучшей подруге Ким, а соседи не считают ее воскрешение положительным событием. Люси не верит, что она умирала, поэтому пытается продолжать вести нормальную жизнь…",
    "release_date": "1987-11-06"
  },
  {
    "vote_count": 12,
    "id": 138977,
    "video": false,
    "vote_average": 5.9,
    "title": "Школьный стрелок",
    "popularity": 2.664485,
    "poster_path": "/t02RkrJQ2XyzZLDZIPtnOWqeWn6.jpg",
    "original_language": "ru",
    "original_title": "Hello Herman",
    "genre_ids": [
      18
    ],
    "backdrop_path": "/6DHypCjTymSftXrNl7mUmoWCCpz.jpg",
    "adult": false,
    "overview": "В одном из городов США, шестнадцатилетний Герман Ховардс приносит в свою школу пистолет, и убивает тридцать девять студентов, двух учителей и офицера полиции. Эту бойню Герман снимает на видео, и незадолго до ареста, посылает по электронной почте видео своему кумиру, известному журналисту Лаксу Моралесу. В этом видео он говорит Лаксу, что хочет рассказать свою историю в его шоу.",
    "release_date": "2012-06-05"
  },
  {
    "vote_count": 1,
    "id": 245464,
    "video": false,
    "vote_average": 7.5,
    "title": "Hello",
    "popularity": 1.081371,
    "poster_path": "/xzPmyA09ebJoRL6kdbuaaHQgg5y.jpg",
    "original_language": "en",
    "original_title": "Hello",
    "genre_ids": [
      35
    ],
    "backdrop_path": null,
    "adult": false,
    "overview": "",
    "release_date": "2013-10-17"
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      results: []
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
      // header

      <Form>

        <Navbar>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Breadcrumb className="BGNone">
                <Breadcrumb.Item href="#">Search</Breadcrumb.Item>
                <Breadcrumb.Item href="#">My movies</Breadcrumb.Item>
              </Breadcrumb>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem className="textMiddle" href="#">
              John Doe
            </NavItem>
            <NavItem >
              <Media.Right>
                <img className="aloe" width={60} height={60} src="data:image/jpeg;base64,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" alt="thumbnail" />
              </Media.Right>
            </NavItem>
          </Nav>
        </Navbar>

        <div class="container">
          <div class="row">
            {/* search field */}
            <Form className="searchField" inline>
              <Grid>
                <Row className="show-grid">
                  <Col md={1} >
                    <DropdownButton className="longDropDown" title="Format">
                      <MenuItem eventKey="1">film</MenuItem>
                      <MenuItem eventKey="2">another film</MenuItem>
                      <MenuItem eventKey="3">little more another film</MenuItem>
                    </DropdownButton>
                  </Col>
                  <Col md={1} >
                    <DropdownButton className="longDropDown" title="Genre">
                      <MenuItem eventKey="1">feature film</MenuItem>
                      <MenuItem eventKey="2">short film</MenuItem>
                      <MenuItem eventKey="3">action</MenuItem>
                      <MenuItem eventKey="4">adventure</MenuItem>
                      <MenuItem eventKey="4">comedy</MenuItem>
                    </DropdownButton>
                  </Col>
                  <Col md={1} >
                    <DropdownButton className="longDropDown" title="Year">
                      <MenuItem eventKey="1">2017</MenuItem>
                      <MenuItem eventKey="2">2016</MenuItem>
                      <MenuItem eventKey="3">2015</MenuItem>
                      <MenuItem eventKey="4">2014</MenuItem>
                    </DropdownButton>
                  </Col>
                  <Col md={5} mdOffset={3} >
                    <FormGroup className="toRight">
                      <FormControl value={this.state.searchValue} onChange={this.handleSearchInputChange} className="borderRadiusInput" type="text" />
                      <Button onClick={this.handleSearchButtonClick} className="borderRadiusButton">Search</Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Grid>
            </Form>

            {/* table */}
            {/* <MoviesTable moivesList={[{}, {}, {}]}/> */}
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


          </div>
        </div>
      </Form>
    )
  }
};
ReactDOM.render(<App />, document.getElementById("index"));