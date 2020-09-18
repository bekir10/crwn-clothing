import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import "./header.styles.scss";

const Header = ({currentUser}) =>(
    <div className="header">

<Link to="/" className="logo-cotainer">
    <Logo className="logo">

    </Logo>
</Link>

<div className="options">
    <Link to="/shop" className="option">
        SHOP
    </Link>
    <Link to="/shop" className="option">
        CONTACT
    </Link>
    {
        currentUser ? //if currentuser is object it will evaluate div else link
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
    }
</div>

    </div>
);

const mapStateToProps = state => ({
     currentUser: state.user.currentUser
})

export default connect(mapStateToProps) (Header);