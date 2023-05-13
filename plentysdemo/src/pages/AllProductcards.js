import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/productcards/Productcards'

export default function AllProductcards() {
    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
        })
        
    },[])
    const allcards = useSelector(state => state.getAllCardsReducer.allcardsDATA)
    console.log(allcards)
    return (
        <div className='container-fluid d-flex ' style={{ flexWrap: 'wrap' }}>
            <div className='bg-dark' style={{ width: '20px', height: "100%" }}>

            </div>
            <div className='container-fluid d-flex ' style={{ flexWrap: 'wrap' }}>
                {
                    allcards.map((card) => {
                        console.log("hello", card)
                        return (

                            <Card item={card} key={card.productId} col={3} />


                        )
                    })
                }


            </div>

        </div>
    )
}
