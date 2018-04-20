import "./newsArtStyle.css";
import React from 'react';
import ReactDOM from "react-dom";

export default class NewsArt extends React.Component {
  constructor() {
    super();
    this.state = {
      head: "Реферат по почвоведению",
      authorName: "Автор:",
      author: " https://yandex.ru/referats",
      text: "Коллембола одномерно продуцирует подпахотный агробиогеоценоз. Прибор Качинского, как того требуют законы термодинамики, снижает полидисперсный грунт. Как следует из закона сохранения массы и энергии, ташет иссушает дренаж, что дает возможность использования данной методики как универсальной. Принимая во внимание искусственность границ элементарной почвы и произвольность ее положения в пространстве почвенного покрова, картирование растворяет генетический микроагрегат при любом их взаимном расположении."
    }
  }
  render() {
    setTimeout(() => {
      this.setState({ author: "Larry did this" });
    }, 4000)
    return (
      <div className="layoutDiv">
        <h1 className="header" >{this.state.head}</h1>
        <h3 className="text"> {this.state.text} </h3>
        <h2 className="autho">{this.state.authorName} {this.state.author}</h2>
      </div>
    );
  }
}
// ReactDOM.render(<NewsArt />, document.getElementById("index"));