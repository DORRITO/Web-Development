import React, { Component } from 'react';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd9c603000d2c4dd6accd873b126b8bfd'
})

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange(e){
    console.log(e.target.value)
  }

  onButtonSubmit(){
    app.models.predict(Clarifai.COLOR_MODEL,
      // URL
      "https://samples.clarifai.com/metro-north.jpg")
    .then(function(response) {
      // do something with responseconsole.log(response);
    },
    function(err) {console.log(err)}
    )
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
