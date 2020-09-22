import CartItem from "../../components/cart.item/cart-item.component"

export const addItemToCart = (cartItems , cartItemToAdd) =>{

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id //ako smo izabrali iste add to cart
        
        )

        if(existingCartItem){ //ako postoji istih
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id  
                
                ?{...cartItem, quantity:cartItem.quantity+1}
                :cartItem
    
            )
        }

        return [...cartItems, {...cartItemToAdd, quantity:1}]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    const existingCartItem= cartItems.find(
        cartItem =>cartItem.id === cartItemToRemove.id
    )//ako imamo cart item

    if (existingCartItem.quantity ===1) { //ako je quantity 1 remove it otherwise decrease by 1

        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)//filter keeps values where function returns true
        
    }
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? //ako je isti
        {
            ...cartItem,
            quantity: cartItem.quantity-1
        }
        :cartItem
    )
}