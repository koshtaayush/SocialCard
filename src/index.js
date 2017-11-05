import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import CardExampleAvatar from'./Card.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();    
  }

  render() {
    return (
      <MuiThemeProvider>
        <CardExampleAvatar/>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
