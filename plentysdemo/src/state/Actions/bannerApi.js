import { useDispatch } from "react-redux";
const GET_BANNERS = ''
const dispatch = useDispatch();
const [bannerData,setBannerData] = useState([])




  
apiUrls='https://api.plentys.pk/api/v1/public/banner?cityId=1%20Request%20Method:%20GET'
 
let fetchBanners = async()=>{
    try{
        let response=await fetch(apiUrls,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                
            }
        });
        let parsedata=await response.json()
        localStorage.setItem('bannerData',JSON.stringify(parsedata.data))
    
        dispatch({
            
        type:GET_BANNERS,
        payload:parsedata.data,

        })

    }catch(e) {
        console.log(e)
    }

}

export {GET_BANNERS}
export default fetchBanners



