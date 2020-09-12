import React from 'react';
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Switch,Route} from "react-router-dom";
import Header from "./components/header/header.component";

function App() {
  return (
    <div >
      <Header></Header>
       <Switch>
      <Route exact path="/" component={HomePage}></Route> {/* if you put exact(boolean) path must be same to render home page*/ }
      <Route  path="/shop" component={ShopPage}></Route>  
      </Switch>
    </div>
  );
}

export default App;
