import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';
import '../css/App.css';
import Card_component from '../components/Card_component';
import Header_component from '../components/Header_component';
import Footer_component from '../components/Footer_component';


class App extends Component {
  render() {
    return (
      <div>
        <Header_component />
        <Card_component />
        <Footer_component />
      </div>
    );
  }
}

export default App;