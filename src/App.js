import React, {Component} from 'react';
import ParticlesBg from "particles-bg";
import Frame from "./components/Frame/Frame.js";
import Logo from './components/Logo/Logo.js';
import Nav from './components/Nav/Nav.js';
import MobNav from './components/MobNav/MobNav.js';
import './App.css'

let config = {
  num: [2, 4],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [.1, 0.25],
  position: "all",
  color: ["random", "#ffcccc"],
  cross: "dead",
  // emitter: "follow",
  random: 15
};

if (Math.random() > 0.85) {
  config = Object.assign(config, {
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
        );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  });
}

const initialState = {
                      width: 0, 
                      height: 0, 
                      user_loggedIn: false, 
                      pageIn: "Estimator",
                      mobNavShow: false
                     }

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onNavClick = (event) => {
    this.setState({pageIn: event.target.innerHTML});
  }

  onMobNavButtonClick = (event) => {
    if (this.state.mobNavShow){
      this.setState({mobNavShow: false});
    } else{
      this.setState({mobNavShow: true});
    }
  }

  onMobNavClick = (event) => {
    this.setState({pageIn: event.target.innerHTML});
  }

  render() {
    return(
      <div>
        <ParticlesBg type="custom" config={config} bg={true} />
        <Frame>
          <Logo />
          {this.state.width >= 900 &&
            <Nav 
              user_loggedIn = { this.state.user_loggedIn } 
              pageIn = { this.state.pageIn } 
              onNavClick = { this.onNavClick }
            />
          }
          {this.state.width < 900 &&
            <MobNav 
              user_loggedIn = { this.state.user_loggedIn } 
              pageIn = { this.state.pageIn } 
              mobNavShow = { this.state.mobNavShow }
              onNavClick = { this.onNavClick } 
              onMobNavButtonClick = { this.onMobNavButtonClick }
            />
          }
        </Frame>
      </div>
    )
  }

}

export default App;
