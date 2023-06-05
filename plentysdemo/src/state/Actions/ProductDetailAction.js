
const PRODUCT_DETAIL="PRODUCT_DETAIL"
const ProductDetailAction=(payload)=>{
    return {
        type:PRODUCT_DETAIL,
        payload:payload
    }
}


export  {PRODUCT_DETAIL,ProductDetailAction}