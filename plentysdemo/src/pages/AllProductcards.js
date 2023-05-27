import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/productcards/Productcards'
import Page404 from '../components/Page404'
export default function AllProductcards() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        })

    }, [])
    const allcards = useSelector(state => state.getAllCardsReducer.allcardsDATA)

    return (
        <div className='container-fluid d-flex ' style={{ flexWrap: 'wrap' }}>
            <div className='bg-dark' style={{ width: '20px', height: "100%" }}>

            </div>
            <div className='container-fluid d-flex ' style={{ flexWrap: 'wrap' }}>
                {
                    allcards.length > 1 ? allcards.map((card) => {

                        return (

                            <Card item={card} key={card.productId} col={3} />


                        )
                    }) : <Page404 />
                }


            </div>

        </div>
    )
}
