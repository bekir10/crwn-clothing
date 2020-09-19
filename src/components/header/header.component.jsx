import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = ({currentUser, hidden}) =>(
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
    <CartIcon></CartIcon>
</div>
{
    hidden?null:
    <CartDropdown></CartDropdown>

}

    </div>
);

const mapStateToProps = ({user :{currentUser},cart:{hidden}}) => ({
     currentUser,
     hidden
})

export default connect(mapStateToProps) (Header);