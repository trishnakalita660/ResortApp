import React, { Fragment } from 'react';
import { 
  Switch,
  Route,
  } from 'react-router-dom'


import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import './App.css';
import Navbar from './components/Navbar';
 
function App() {
  return (
    
    <Fragment>
    <Navbar/>
    <Switch >
    <Route exact path="/" component={Home}/>
    <Route exact path="/Rooms" component={Rooms}/>
    <Route exact path="/Rooms/:slug" component={SingleRoom}/>
    <Route  component={Error}/>
     
    </Switch>
    </Fragment>

  );
}

export default App;
