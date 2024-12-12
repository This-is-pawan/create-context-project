import React, { Component } from "react";
import axios from "axios";

// import img from "../About.svg";

export default class ThirdClass extends Component {
  constructor() {
    super();
    console.log(
      "Hello world! I am the constructor from the news component, and it renders first."
    );
    this.state = {
      article: [],
      loading: false,
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=784dc79105f444078c2a012390d60bc5";
    console.log("Fetching data from URL:", url);

    this.setState({ loading: true });

    axios
      .get(url)
      .then((response) => {
        console.log("Response data:", response.data);
        this.setState({
          article: response.data.articles , 
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { article, loading } = this.state;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="box">
            {
              article.map((item, index) => (
                <div className="boxAlign" key={index}>
                  <h4>{item.title}</h4>
                  {item.urlToImage && (
                    <img src={item.urlToImage} alt={item.title} className="img" />
                  )}
                  <p>{item.description}</p>
                </div>
              ))
            
            }
          </div>
        )}
      </div>
    );
  }
}
