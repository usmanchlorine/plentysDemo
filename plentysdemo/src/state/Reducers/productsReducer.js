import { GET_BUEATY, GET_PlentysMart, GET_WHOLESALE } from "../Actions/ProductsApi";

const initialState = {
    wholeSale: [],
    PlentysMart: [],
    BeautyGrooming: [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PlentysMart:
            return {
                ...state,
                PlentysMart: action.payload
            }

        case GET_WHOLESALE:
            return {
                ...state,

                wholeSale: action.payload
            }

        case GET_BUEATY:
            return {
                ...state,

                BeautyGrooming: action.payload
            }
        default:
            return state
    }
}


export default productsReducer;