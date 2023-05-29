
import { at } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Pagination(props) {

    const allcardslength = props.allcards
    const cardsperPage = props.cardsperPage
    const Paginate = props.Paginate
    const activeNumber = parseInt(props.active)

    const PageNumber = []

    for (let i = 1; i < Math.ceil(allcardslength / cardsperPage); i++) {
        PageNumber.push(i)

    }



    console.log('this is your ', activeNumber, PageNumber.length - activeNumber);
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        })

        if (activeNumber - 1 <= 1) {
            document.getElementById('previous').style.display = "none"
        } else if (activeNumber + 1 == PageNumber.length) {
            document.getElementById('next').style.display = "none"
        } else {
            document.getElementById('next').style.display = ""
            document.getElementById('previous').style.display = ""
        }



    }, [<Paginate />]) /// i can do state variable also and also i can use certain component    



    // const pagehandler = (event) => {
    //    

    // }


    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" onClick={() => Paginate('Previous')} id="previous"  ><Link class="page-link" to={`/allcards`}>previous</Link></li>

                <li class="page-item" onClick={() => Paginate(activeNumber - 1)} key={activeNumber - 1}><Link class="page-link" to={`/allcards`}>{activeNumber - 1}</Link></li>

                <li class="page-item" onClick={() => Paginate(activeNumber)} key={activeNumber}><Link class="page-link" to={`/allcards`}>{activeNumber}</Link></li>

                <li class="page-item" onClick={() => Paginate(activeNumber + 1)} key={activeNumber + 1}><Link class="page-link" to={`/allcards`}>{activeNumber + 1}</Link></li>
                <li class="page-item" onClick={() => Paginate('Next')} id="next"  ><Link class="page-link" to={`/allcards`}>Next</Link></li>
            </ul>
        </nav >
    )
}

