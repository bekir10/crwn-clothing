import React from "react";
import {ReactComponent as Logo} from "../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selectors"
import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from "./header.styles"
import {signOutStart} from "../../redux/user/user.actions"

const Header = ({currentUser, hidden,signOutStart }) =>(
    <HeaderContainer>

<LogoContainer to="/">
    <Logo className="logo"> </Logo>
</LogoContainer>

<OptionsContainer>
    <OptionLink to="/shop">SHOP</OptionLink>
    <OptionLink to="/shop">CONTACT</OptionLink>
    {
        currentUser ? //if currentuser is object it will evaluate div else link
        <OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>
        :
        <OptionLink  to="/signin">SIGN IN</OptionLink>
    }
    <CartIcon></CartIcon>
</OptionsContainer>

{
    hidden?null:
    <CartDropdown></CartDropdown>

}

    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
     currentUser : selectCurrentUser,
     hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps) (Header);