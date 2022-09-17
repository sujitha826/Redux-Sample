export const storeProductList = (payload) => {
    return {
        type: "STORE_PRODUCT_LIST",
        payload: payload
    }
}

export const storeCartList = (payload) => {
    return {
        type: "STORE_CART_LIST",
        payload: payload
    }
}