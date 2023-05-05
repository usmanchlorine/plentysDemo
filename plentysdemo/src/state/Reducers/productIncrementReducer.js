
const defualt_state={
    prodcount:0,
    prodIds:[]

}


const productIncrement=(state=defualt_state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                prodcount:state.prodcount+1,
                prodIds:state.prodIds.concat(action.payload)

            }
        
        default:    
            return state
            
            
    }
}


export default productIncrement