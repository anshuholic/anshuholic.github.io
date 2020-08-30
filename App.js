import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Resume from './Resume';


const App = () => {
      return (
      <>
      <Navbar />
        <Switch>
          <Route exact path="/"Home/>
          <Route exact path="/about"About/>
          <Route exact path="/contact"Contact/>
          <Route exact path="/resume"Resume/>           
          <Redirect to="/" />          
        </Switch>
        <Footer />
        
        
        
      </>

    );
  };


export default App;
