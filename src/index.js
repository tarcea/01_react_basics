import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

import JSON from './db.json';

// Components
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {

  state = {
    news:JSON,
    filtered: [],
  }

  getKeyword = (event) => {
    // console.log(event.target.value)
    let keyword = event.target.value.toLowerCase();
    let filtered = this.state.news.filter((item) => {
      return item.title.toLowerCase().indexOf(keyword) > -1
    });
    this.setState({
      filtered: filtered //I can use just filtered while key and value has the same name
    })
    // console.log(filtered)
  }

  render() {
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news;
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          The news are:
        </NewsList>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.querySelector('#root'));
