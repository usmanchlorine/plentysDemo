import { combineReducers } from "@reduxjs/toolkit";
import productIncrementReducer from "./productIncrementReducer";
import getbannerReducer from "./bannerReducer";
import productsReducer from "./productsReducer";

let allReducers=combineReducers({
    productIncrementReducer: productIncrementReducer,
    getbannerReducer:getbannerReducer,
    getProductReducer:productsReducer
}
  
    

)


export default allReducers;