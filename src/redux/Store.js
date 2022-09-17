import { createStore, combineReducers } from "redux";

import products from './reducer/ProductsReducer';
import myCart from './reducer/MyCartReducer';

const appReducers = combineReducers(
    {
        products,
        myCart
    }
);

const store = createStore(appReducers);

export default store;