
const initialState = {
    cartList: []
}

const myCart = (state = initialState, action) => {
    console.log("action called mycart", action);

    switch (action.type) {

        case "STORE_CART_LIST":
            return Object.assign({}, state, { cartList: action.payload });

        default:
            return state;
    }
};

export default myCart;