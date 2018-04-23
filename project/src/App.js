import React, { Component } from 'react';
import logo from './imgs/logo-chaordic.png';
import face from './imgs/icon-facebook.png';
import twitter from './imgs/icon-twitter.png';
import './App.css';
import './components/Urls.css';
import './components/button.css';
import Urls from './components/Urls.jsx';
import data from './data/urls.json';


const Child = () => (
<div className='modal'>
      http://chr.dc/xyzxyz
  </div>
)

class App extends Component {


  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render() {

    return (

      <div className="App">

        <header className="App-header">
        <figure><img src={logo} className="App-logo" alt="logo" /></figure>
        <div className="App-background"></div> 
        <article><p className="App-intro">
           <h1 className="App-title">Encurte seus links.</h1>
          Links são longos. Encurte os links que você deseja compartilhar, <br/> e compartilhe enquanto viajam através da internet.
         { this.state.isHidden && <h2 className="link">www.google.com.br</h2>}
          <div>
        <button className='bt' onClick={this.toggleHidden.bind(this)} >
          ENCURTAR
        </button>
        {!this.state.isHidden && <Child />}
      </div>
          <hr></hr>
        </p>

        </article>
        </header>
        <body>
        <section id="top5"><h1>TOP 5</h1><br/><h2><Urls data={data}/></h2></section>
        <section id="hits"><div className="arrow-down"></div><h1>HITS</h1><br/>
        <h1 className="hits2">35.713.571</h1><br />
        <h2 className="hits3">cliques em links</h2>
        </section>
        </body>
        <footer> <div><h2>chr.dc</h2><figure><img src={face} className="App-face" alt="face" /><img src={twitter} className="App-twitter" alt="twitter" /></figure></div></footer>

      </div>
    );
  }
}

export default App;
