import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...setImmediate,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default CartReducer;