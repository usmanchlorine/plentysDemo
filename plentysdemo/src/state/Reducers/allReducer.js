import { combineReducers } from "@reduxjs/toolkit";
import productIncrementReducer from "./productIncrementReducer";
import getbannerReducer from "./bannerReducer";
import productsReducer from "./productsReducer";
import getAllCardsReducer from "./showAllcardsReducer";

let allReducers = combineReducers({
    productIncrementReducer: productIncrementReducer,
    getbannerReducer: getbannerReducer,
    getProductReducer: productsReducer,
    getAllCardsReducer: getAllCardsReducer
}



)


export default allReducers;