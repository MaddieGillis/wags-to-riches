import React from 'react';
import { Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Faves from './components/Faves';
import Donate from "./components/Donate";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
            <Route path="/faves" component={Faves} />
            <Route path="/donate" component={Donate} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
      <Footer />
    </div>
  );
}

export default App;