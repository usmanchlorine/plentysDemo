import { GETALLCARDS } from "./showAllCardsAction";

let GetallCards = (cartegoryid) => {
    // const [bannerData,setBannerData] = useState([])

    try {
        return async dispatch => {
            let response = await fetch(`https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=${cartegoryid}&minPrice=1&maxPrice=&productIds=&storeId=&storeName=%22PlentysMart%22&brandId=&rating=&conditionId=&discountValue=&promotionId=&&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1`,
                {
                    method: 'GET',

                });
            let parsedata = await response.json()


            // localStorage.setItem('bannerData',JSON.stringify(parsedata.data))

            dispatch({

                type: GETALLCARDS,
                payload: parsedata.data,

            })

        }

    } catch (e) {
        console.log(e)
    }

}

export default GetallCards