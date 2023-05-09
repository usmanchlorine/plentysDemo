import { useDispatch } from "react-redux";
import { useState } from "react";

const GET_BANNERS = 'GETBANNERS';







const apiUrls = 'https://api.plentys.pk/api/v1/public/banner?cityId=1%20Request%20Method:%20GET'

let fetchBanners = () => {
    // const [bannerData,setBannerData] = useState([])

    try {
        return async dispatch => {
            let response = await fetch(apiUrls, {
                method: 'GET',

            });
            let parsedata = await response.json()

            // localStorage.setItem('bannerData',JSON.stringify(parsedata.data))

            dispatch({

                type: GET_BANNERS,
                payload: parsedata.data,

            })

        }

    } catch (e) {
        console.log(e)
    }



}



export { GET_BANNERS }
export default fetchBanners



