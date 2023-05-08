import { GET_BANNERS } from "../Actions/bannerApi";

const getbannerReducer=()=>{
    const initialState={
        banners:[]
    }
    return (state=initialState,action)=>{
        switch(action.type){
            case GET_BANNERS:
                return{
                  ...state,
                    banners:action.payload
                }
            default:
                return state
        }
    }
}


export default getbannerReducer;