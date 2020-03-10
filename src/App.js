import React from 'react';
import { Route } from "react-router-dom";
import NavBar from './Components/navbar'
import Body from './Components/body';
import Header from './Components/header';
import Footer from './Components/footer';
import Shyla from './Components/shyla'

function App() {
  return (
      <div className="App">
        {/* <Route exact path='/' component={NavBar} /> */}
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Body} />
        <Route exact path='/' component={Footer} /> 
        <Route path="/shyla" exact component={Shyla} />
      </div>
  );
}

export default App;