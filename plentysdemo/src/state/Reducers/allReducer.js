import { combineReducers } from "@reduxjs/toolkit";
import productIncrementReducer from "./productIncrementReducer";
import getbannerReducer from "./bannerReducer";

let allReducers=combineReducers({
    productIncrementReducer: productIncrementReducer,
    getbannerReducer:getbannerReducer
}
  
    

)


export default allReducers;