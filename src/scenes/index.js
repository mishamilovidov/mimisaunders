import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import About from './About';
import Contact from './Contact';
import Photography from './Photography';
import Home from './Home';

WebFont.load({
  google: {
    families: ['Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/photography' component={Photography}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
