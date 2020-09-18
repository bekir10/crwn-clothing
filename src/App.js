import React from 'react';
import './App.css';
import {connect} from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Switch,Route} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth,createUserProfileDocument } from "./firebase/firebase.utils"; 
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount(){ //last user that is logged in with google
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id:snapShot.id, 
              ...snapShot.data()
            })
          
                })
      }else{
      setCurrentUser(userAuth);
    }  
    });
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
        <Route  path='/signin' component={SignInAndSignUp}></Route>  
        </Switch>
      </div>
    );

  }
 
} 

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))//whatewer you passing in dispatch it is gonna be action object that is assed to evry reducer
})

export default connect(null,mapDispatchToProps) (App);
