
let storedProductList = JSON.parse(localStorage.getItem("products"));
if (!storedProductList)
    storedProductList = [];

const initialState = {
    list: storedProductList
};

const products = (state = initialState, action) => {
    console.log("action called product", action);
    switch (action.type) {
        
        case "STORE_PRODUCT_LIST":
            return Object.assign({}, state, { list: action.payload });

        default:
            return state;
    }
}

export default products;