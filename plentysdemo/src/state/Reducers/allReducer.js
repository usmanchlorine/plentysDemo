import { combineReducers } from "@reduxjs/toolkit";
import productIncrementReducer from "./productIncrementReducer";

let allReducers=combineReducers({
    productIncrementReducer: productIncrementReducer
}
  
    

)


export default allReducers;