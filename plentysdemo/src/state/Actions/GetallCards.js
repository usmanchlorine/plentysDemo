import { GETALLCARDS } from "./showAllCardsAction";

let GetallCards = (cartegoryid, serchtext = '', page = '1') => {
    // const [bannerData,setBannerData] = useState([])
    // const parseSerchtext = (parsedata, serchtext) => {

    //     return parsedata.filter((products) => {
    //         return products.title.startsWith(serchtext)
    //     })

    // }



    try {
        return async dispatch => {
            let response = await fetch(`https://api.plentys.pk/api/v1/public/product/search?title=${serchtext}/&categoryId=${cartegoryid}&minPrice=1&maxPrice=&productIds=&storeId=&storeName=%22PlentysMart%22&brandId=&rating=&conditionId=&discountValue=&promotionId=&&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=${page}`,
                {
                    method: 'GET',

                });
            var parsedata = (await response.json()).data
            // if (serchtext.length > 0) {
            //     console.log("searchtext chala hai")
            //     parsedata = await parseSerchtext(parsedata, serchtext)
            // }









            // localStorage.setItem('bannerData',JSON.stringify(parsedata.data))

            dispatch({

                type: GETALLCARDS,
                payload: parsedata,

            })

        }

    } catch (e) {
        console.log(e)
    }

}

export default GetallCards