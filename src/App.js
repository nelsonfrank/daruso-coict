import React, { Component } from 'react';

import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';

import './App.css';
import Navbar from './components/header/Navbar';
import Trends from '/home/nelson/daruso-coict/src/components/Trends';
import Loginin from './components/Loginin';
import DarusoNews from './components/DarusoNews';
import Footer from './components/Footer';
import CoictNews from './components/CoictNews';
import Related from './components/Related';
import Click from './components/Click';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <Router>
     <div>
     <Navbar /> 
     <Route exact path='/Click' component={Click} />

    <div className="container ">
     <div className="row">
     <div className="col-8">
     <Route exact path='/' component={Trends} />
     <Route exact path='/' component={DarusoNews} />
     <Route exact path='/' component={CoictNews} />

     <Route exact path='/DarusoNews' component={DarusoNews} />
     <Route exact path='/CoictNews' component={CoictNews} />
    <Route exact path='/Loginin' component={Loginin} />


      </div>
      <div className="col-4">
      <Route exact path='/' component={Related} />

      </div>
       </div>
    </div>
    <Route exact path='/' component={Footer} />

   </div>
   

   </Router> ;
  }
}
 
export default App;
