import React from 'react';
import './App.css';

import HomePage from "./pages/homepage/homepage.component";

import {Switch,Route} from "react-router-dom";

const HatsPage = (props) =>{
  console.log(props)
  return(
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
}

function App() {
  return (
    <div >
       {/* when sees match just renders that nothin else */}
       
      <Route exact path="/" component={HomePage}></Route> {/* if you put exact(boolean) path must be same to render home page*/ }
      <Route  path="/hats" component={HatsPage}></Route>  
      
      
    </div>
  );
}

export default App;
