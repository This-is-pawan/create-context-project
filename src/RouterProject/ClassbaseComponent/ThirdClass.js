import React, { Component } from "react";
import axios from "axios";

export default class ThirdClass extends Component {
  constructor() {
    super();
    console.log(
      "Hello world! I am the constructor from the news component, and it renders first."
    );
    this.state = {
      article: [],
      loading: false,
      page: 1, 
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=784dc79105f444078c2a012390d60bc5&page=${page}`;

    this.setState({ loading: true });

    axios
      .get(url)
      .then((response) => {
        this.setState({
          article: response.data.articles,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        this.setState({ loading: false });
      });
  };

  handlePreClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews   
    );
  };

  handleNextClick = () => {
    this.setState(
      (NextState) => ({ page: NextState.page + 1 }),
      this.fetchNews 
    );
  };

  render() {
    const { article, loading, page } = this.state;

    return (
      <>
        <div>
          {loading ? (
            <div className="loading-circle"></div>
          ) : (
            <div className="box">
              {article.map((item, index) => (
                <div className="boxAlign" key={index}>
                  <h4>{item.title}</h4>
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      className="img"
                    />
                  )}
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="btnbox">
          <button
            className="btn"
            disabled={page <= 1}
            onClick={this.handlePreClick}
          >
            ← Previous
          </button>
          <button  disabled={page >=3} className="btn" onClick={this.handleNextClick}>
            Next →
          </button>
        </div>
      </>
    );
  }
}
