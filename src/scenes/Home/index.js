import React, { Component } from 'react';
import HomeText from './components/HomeText';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="layer">
          <HomeText />
        </div>
      </div>
    );
  }
}

export default Home;
