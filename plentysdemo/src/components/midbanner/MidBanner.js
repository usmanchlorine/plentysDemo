import React from 'react'
import styles from './midBanner.module.css'
import { useState } from 'react'
import _, { set } from 'lodash'
import { useEffect } from 'react'
export default function MidBanner(props) {
    const banners=props.banners
    const groupby_banners=_.groupBy(banners,'mobile')
    const [isMobile, setIsMobile] = useState(false)
    console.log(groupby_banners)
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }
    window.addEventListener('resize', handleResize);

    const [datainterval,setDataInterval] = useState('false')


 
    

    const mobilebanner=(bannercrousal)=>{
        
      
        return(
        <>
        
        {
            bannercrousal?.map((item,index)=>{
                         
                return(
                    index==0?
                    (<div key={item.bannerId}  className={"carousel-item active"}>
                        <img className="d-block w-100" src={item.imageUrl} alt="First slide" />
                    </div>)
                    :(<div key={item.bannerId} id='banner' className={"carousel-item"}>
                    <img className="d-block w-100" src={item.imageUrl} alt="First slide" />
                    </div>)
                    )
    
    
      
        })
        }
    </> 
        
        )

        
    
    }

       


 
    return (
        <div className={'container '+styles.crousal}>
            <div id="carouselExampleIndicators" className={"carousel slide"} data-interval="1000" >
                <ol className="carousel-indicators" style={{marginBottom:'30px'}}>
                    <li data-target="#carouselExampleIndicators" className={'border rounded '+styles.indicator} data-slide-to="0" ></li>
                    <li data-target="#carouselExampleIndicators" className={'border rounded '+styles.indicator}  data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators"  className={'border rounded '+styles.indicator} data-slide-to="2"></li>
                </ol>
                <div className={"carousel-inner "+styles.crousal}>

                    {   
                       
                       
                        isMobile?mobilebanner(groupby_banners[1]):mobilebanner(groupby_banners[0])
                    

                    }
                      

                    
                       
                    
                  
                 
                   
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" id='next' href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}
