import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey ="pk_test_51HWorRAYjgz9bSV0RAZ47xSxk3GWTjLplnPsfwD4BTRMzD7ZSIYYODBxSQgwlnvcY0fj6JgrTfrlVI13QgolVFZz00tOYdbg1L"

   const onToken = token =>{
        console.log(token)
        alert("payment successful")
    }

    return(
        <StripeCheckout 
        label="pay now"
        name="Crwn Clothing ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is ${price}`}
        amount ={priceForStripe}
        panelLabel="pay now"
        token={onToken}
        stripeKey = {publishableKey}
        >

        </StripeCheckout>
    )


}

export default StripeCheckoutButton;