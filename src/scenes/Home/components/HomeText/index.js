import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';

class HomeText extends Component {
  render() {
    const transitionOptions = {
      transitionName: "fade",
      transitionAppear: true,
      transitionAppearTimeout: 1000,
      transitionEnter: false,
      transitionLeave: false
    }

    return (
      <ReactCSSTransitionGroup {...transitionOptions}>
        <div className="HomeText">
          <div className="title">Mimi Saunders</div>
          <div className="subtitle">Website Coming Soon 👩‍💻</div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default HomeText;
