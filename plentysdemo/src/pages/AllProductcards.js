import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/productcards/Productcards'
import Page404 from '../components/Page404'
import Pagination from '../components/Pagination/Pagination'
import { isNumber } from 'lodash'
import { Link } from 'react-router-dom'


function Allcards(props) {
    return (
        <>        <div className='container-fluid d-flex ' style={{ flexWrap: 'wrap' }}>

            {
                props.allcards.length > 1 ? props.allcards.map((card) => {

                    return (

                        <Card item={card} key={card.productId} col={3} />


                    )
                })
                    : <Page404 />
            }




        </div>



        </>

    )
}





export default function AllProductcards() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        })

        return (() => {
            localStorage.setItem('paginate', '1')
        })

    }, [])
    const allcards = useSelector(state => state.getAllCardsReducer.allcardsDATA)
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('paginate') !== null ? parseInt(localStorage.getItem('paginate')) : 1)
    const [cardsperPage, setcardsperPage] = useState(8)

    const indexofLastPage = currentPage * cardsperPage
    const indexofFirstPage = indexofLastPage - cardsperPage
    const currentcards = allcards.slice(indexofFirstPage, indexofLastPage)


    const Paginate = (value) => {
        console.log("current", value)
        if (isNumber(value)) {
            localStorage.setItem('paginate', currentPage)
            setCurrentPage(value)
        }

    }

    return (
        <div className='container-fluid d-flex ' style={{ flexWrap: 'wrap' }}>
            <div className='bg-dark' style={{ width: '20px', height: "100%" }}>

            </div>

            <Allcards allcards={currentcards} />


            <div className='d-flex justify-content-end pr-3 ' style={{ width: '100%' }}>
                <Pagination allcards={allcards.length} active={currentPage} cardsperPage={cardsperPage} Paginate={Paginate} />

            </div>





        </div>
    )
}
