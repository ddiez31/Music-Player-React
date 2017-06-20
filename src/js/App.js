import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../css/App.css';
import Card_component from '../components/Card_component';
import Header_component from '../components/Header_component';
import Footer_component from '../components/Footer_component';
import { getRandomBrewdog } from './DeezerAPI';

class App extends Component {
  componentWillMount() {
    getRandomBrewdog() // fetch() retourne une Promise
      .then(json => console.log(json))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div>
        <Header_component />
        <Card_component />
        <div>
          <ReactAudioPlayer
            src="http://static.echonest.com/audio2/01%20-%20Virginia%20Reel%20Around%20The%20Fountain.mp3"
            controls
            />
        </div>
        <Footer_component />
      </div>
    );
  }
}

export default App;