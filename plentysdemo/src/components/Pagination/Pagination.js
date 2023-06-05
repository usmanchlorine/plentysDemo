
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



    const backgroundChange = () => {
        let pages = document.querySelectorAll('.page-item *')
        console.log(pages.forEach(page => {
            if (activeNumber == page.innerHTML) {
                page.style.backgroundColor = "blue"
                page.style.color = "white"
            } else {
                page.style.backgroundColor = ""
                page.style.color = "blue"

            }
        }))
    }


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        })

        backgroundChange()



    }, [<Paginate />]) /// i can do state variable also and also i can use certain component    



    // const pagehandler = (event) => {
    //    

    // }

    console.log(PageNumber)

    return (
        <nav aria-label="Page navigation example">
            {
                PageNumber.length > 5 ? (

                    <ul class="pagination">

                        {activeNumber <= PageNumber.at(0) + 1 ? "" : <li class="page-item" onClick={() => Paginate(activeNumber - 1)} id="previous"  ><Link class="page-link" to={`/allcards`}>previous</Link></li>}
                        <li class="page-item" onClick={() => Paginate(PageNumber.at(0))} key={PageNumber.at(0)}><Link class="page-link" to={`/allcards`}>{PageNumber.at(0)}</Link></li>
                        {activeNumber >= 3 ? <li class="page-item" onClick={() => Paginate(Paginate(activeNumber - 1))} ><Link class="page-link" to={`/allcards`}>...</Link></li> : <li class="page-item" onClick={() => Paginate(Paginate(2))} ><Link class="page-link" to={`/allcards`}>2</Link></li>}
                        {activeNumber <= 3 ? <li class="page-item" onClick={() => Paginate(3)} ><Link class="page-link" to={`/allcards`}>{3}</Link></li> : activeNumber < PageNumber.at(-2) ? <li class="page-item" onClick={() => Paginate(activeNumber - 1)} ><Link class="page-link" to={`/allcards`}>{activeNumber - 1}</Link></li> : <li class="page-item" onClick={() => Paginate(PageNumber.at(-4))} ><Link class="page-link" to={`/allcards`}>{PageNumber.at(-4)}</Link></li>}
                        {activeNumber <= 3 ? <li class="page-item" onClick={() => Paginate(4)} ><Link class="page-link" to={`/allcards`}>{4}</Link></li> : activeNumber < PageNumber.at(-2) ? <li class="page-item" onClick={() => Paginate(activeNumber)} ><Link class="page-link" to={`/allcards`}>{activeNumber}</Link></li> : <li class="page-item" onClick={() => Paginate(PageNumber.at(-3))} ><Link class="page-link" to={`/allcards`}>{PageNumber.at(-3)}</Link></li>}
                        {(activeNumber >= 4 && activeNumber < PageNumber.at(-3)) ? <li class="page-item" onClick={() => Paginate(activeNumber + 1)} ><Link class="page-link" to={`/allcards`}>{activeNumber + 1}</Link></li> : ""}
                        {activeNumber <= PageNumber.at(-4) ? <li class="page-item" onClick={() => Paginate(activeNumber + 1)} ><Link class="page-link" to={`/allcards`}>...</Link></li> : ""}
                        {activeNumber >= PageNumber.at(-3) ? <li class="page-item" onClick={() => Paginate(PageNumber.at(-2))} ><Link class="page-link" to={`/allcards`}>{PageNumber.at(-2)}</Link></li> : ""}
                        <li class="page-item" onClick={() => Paginate(PageNumber.at(-1))} ><Link class="page-link" to={`/allcards`}>{PageNumber.at(-1)}</Link></li>
                        {activeNumber >= PageNumber.at(-1) - 2 ? "" : <li class="page-item" onClick={() => Paginate(activeNumber + 1)} id="next"  ><Link class="page-link" to={`/allcards`}>Next</Link></li>}
                    </ul>
                ) : (
                    <ul class="pagination">

                        {

                            PageNumber.map((number, index) => (
                                <li class="page-item" key={index} onClick={() => Paginate(PageNumber.at(index))} ><Link class="page-link" to={`/allcards`}>{PageNumber.at(index)}</Link></li>
                            ))


                        }

                    </ul>
                )
            }

        </nav >
    )
}

