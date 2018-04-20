import React from 'react';
import ReactDOM from "react-dom";
import Calculate from "./buttonProject/Calculate/calculate";
import PhoneBook from "./buttonProject/phoneBook/phoneBook";
import HelloThere from "./buttonProject/helloThere/helloThere";
import UniqueLists from "./buttonProject/listsKeysDeleteUniqueKey/UniqueLists";
import NewsArt from "./buttonProject/newsArt/newsArt";
import MovieSearch from "./buttonProject/movieSearch/main";
import TodoListApp from "./buttonProject/toDoList/ToDoListApp";
import ColorChange from "./buttonProject/colorChange/colorChange";
import Timer from "./buttonProject/timer/Timer";

const projects = ["Calculator", "MovieSearch", "PhoneBook", "HelloThere",
  "UniqueLists", "NewsArt", "TodoListApp", "ColorChange", "Timer"];
export class ButtonProject extends React.Component {
  constructor() {
    super();
    this.state = {
      isCalculateDrop: false,
    }
    this.toggleCalculateDrop1 = this.toggleCalculateDrop1.bind(this);
    this.calculate = this.calculate.bind(this);
    this.phoneBook = this.phoneBook.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.helloThere = this.helloThere.bind(this);
    this.uniqueLists = this.uniqueLists.bind(this);
    this.newsArt = this.newsArt.bind(this);
    this.movieSearch = this.movieSearch.bind(this);
    this.todoListApp = this.todoListApp.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.timer = this.timer.bind(this);
  }

  toggleCalculateDrop1() {
    this.setState({
      isCalculateDrop: !this.state.isCalculateDrop,
    });
  }

  movieSearch(event) {
    ReactDOM.render(<MovieSearch />, document.getElementById("contentHere"));
  }

  calculate(event) {
    ReactDOM.render(<Calculate />, document.getElementById("contentHere"));
    this.setState({
      isCalculateDrop: !this.state.isCalculateDrop
    });
    console.log(this.state.isCalculateDrop)
  }

  phoneBook(event) {
    ReactDOM.render(<PhoneBook />, document.getElementById("contentHere"));
  }
  helloThere(event) {
    ReactDOM.render(<HelloThere />, document.getElementById("contentHere"));
  }
  uniqueLists(event) {
    ReactDOM.render(<UniqueLists />, document.getElementById("contentHere"));
  }
  newsArt(event) {
    ReactDOM.render(<NewsArt />, document.getElementById("contentHere"));
  }
  todoListApp(event) {
    ReactDOM.render(<TodoListApp />, document.getElementById("contentHere"));
  }
  colorChange(event) {
    ReactDOM.render(<ColorChange />, document.getElementById("contentHere"));
  }
  timer(event) {
    ReactDOM.render(<Timer />, document.getElementById("contentHere"));
  }

  onItemClick(event) {
    const projectName = event.target.innerHTML;
    switch (projectName) {
      case 'MovieSearch': this.movieSearch(); break;
      case 'PhoneBook': this.phoneBook(); break;
      case 'Calculator': this.calculate(); break;
      case 'HelloThere': this.helloThere(); break;
      case 'UniqueLists': this.uniqueLists(); break;
      case 'NewsArt': this.newsArt(); break;
      case 'TodoListApp': this.todoListApp(); break;
      case 'ColorChange': this.colorChange(); break;
      case 'Timer': this.timer(); break;
    }
  }
  render() {
    return (
      <div>
        {
          projects.map((projectName, index) => {
            return (
              <div key={index} onClick={this.onItemClick} className="buttonProject">
                {projectName}
              </div>
            );
          })
        }
      </div>
    )
  }
};