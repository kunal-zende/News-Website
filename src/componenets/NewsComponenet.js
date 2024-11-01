import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsComponenet extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=72a29a71cdd244fb98a19c6129ddc77b";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Kunal News Webapp</h2>
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                imageUrl={
                  element.urlToImage? element.urlToImage: "https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg?t=st=1730318159~exp=1730321759~hmac=07a729667c017f4847993e638215e2de9a103fca8ff801ab6693f67337afb243&w=740"
                  }
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        {/* <div className="container">
          <button className="btn btn-dark">Previous</button>
          <button className="btn btn-dark">Next</button>
        </div> */}
      </div>
    );
  }
}
