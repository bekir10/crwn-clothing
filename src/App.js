import React from 'react';
import './App.css';
import {connect} from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component"

import {Switch,Route, Redirect} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {checkUserSession} from "./redux/user/user.actions"
import {selectCurrentUser} from "./redux/user/user.selectors"
import {createStructuredSelector} from "reselect";

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount(){ //last user that is logged in with google
     const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div >
        <Header ></Header>
         <Switch>
        <Route exact path="/" component={HomePage}></Route> {/* if you put exact(boolean) path must be same to render home page*/ }
        <Route  path="/shop" component={ShopPage}></Route>  
        <Route exact path="/checkout" component={CheckoutPage}></Route>  
        <Route exact path='/signin' render={() => 
          this.props.currentUser ?
          (<Redirect to ="/"></Redirect>) : (<SignInAndSignUp></SignInAndSignUp>) } ></Route>  
        </Switch>
      </div>
    );

  }
 
} 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
