import { GETALLCARDS } from "../Actions/showAllCardsAction"


const initialState = {
    allcardsDATA: []
}



const getAllCardsReducer = (state = initialState, action) => {
    console.log("chalgaya all cards", action.payload, action.type)
    switch (action.type) {
        case GETALLCARDS:
            return {
                ...state,
                allcardsDATA: action.payload
            }
        default:
            return state
    }

}


export default getAllCardsReducer
