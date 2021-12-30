import React, { Component } from "react";
import Header from "./containers/Header/Header";
import MemeGenerator from "./containers/MemeGenerator/MemeGenerator";
import Footer from './containers/Footer/Footer'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
