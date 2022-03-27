const initialState = {
    hidden: false,
    cartItems: [],
}

const cartReducer = (state = initialState,action) => {
    switch(action.type){
        case "ADD_ITEM":
            const existingCartItem = state.cartItems.find(
                cartItem => cartItem.id === action.payload.id
            )
        
            if(existingCartItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...action.payload, quantity: 1}]
                }
            };
        case "TOGGLE_HIDDEN":
            return{
                ...state,
                hidden: !state.hidden
            };
        default: 
         return state
    }
}

export default cartReducer