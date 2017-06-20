import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/Header.css';

class Header_component extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Music Player</h2>
        </div>
      </div>
      );
  };
};

export default Header_component;