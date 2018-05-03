import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';

import Navbar from "./components/navbar"
//import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
         <Navbar  />
         {/* <MainContent /> */}
         <Footer/>
      </div>
    );
  }
}

export default App;
