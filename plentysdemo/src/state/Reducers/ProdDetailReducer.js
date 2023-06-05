import { PRODUCT_DETAIL } from "../Actions/ProductDetailAction";


const initialState = {
    ProductDetail: null,
}

const GetProductDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return {
                ...state,
                ProductDetail: action.payload
            }
        default:
            return state
    }
}


export { GetProductDetailReducer } 