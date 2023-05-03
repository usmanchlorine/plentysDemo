import React from 'react'

import styles from './productcards.module.css'

const colorfill = (event) => {
    /// ternary operatos
    event.target.style.color === "red" ? event.target.style.color = "gray" : event.target.style.color = "red";


}



function card(item) {
    const carddata = item;
    return (
        <>
            <div className="col-md-12 col-lg-4 mb-3" >
                <div className="card bg-white border-0 mt-5 " style={{ width: '300px', height: '500px', position: 'relative' }}>
                    <span class={"badge badge-danger " + styles.badge_discount}>Danger</span>
                    <span class={"badge badge-light " + styles.badge_discount2}><i onClick={colorfill} className="bi bi-heart-fill"></i></span>
                    <img src={carddata.mobileImageUrl}
                        className={"card-img-top " + styles.imgcard} alt="Laptop" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4 style={{whiteSpace:'nowrap'}}>{carddata.name}</h4>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p style={{ marginBottom: "0.2rem" }}>metallic Crayon</p>
                        </div>

                        <div className="d-flex justify-content-start mb-1 ">
                            <div className="text-warning">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <span className='ml-1'>{('(80)')}</span>

                        </div>

                        <div className="d-flex justify-content-between mb-1">
                            <button className='btn btn-warning ' style={{ padding: '15px 30px', fontSize: '14px', fontWeight: 'bold' }}>Add to card</button>
                            <div>
                                <p className="small text-danger" style={{ float: 'right', marginBottom: '0.2rem' }}><s>$1099</s></p>
                                <h5 className="text-dark" style={{ alignSelf: 'center' }}>$999</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default function Productcards(props) {

    return (
        <>
            {
                props.heading?.map((lists) => {
                    return (
                        <div className='container' style={{height:"max-content"}}>
                            <h3>{lists.name}</h3>
                            <br></br>
                            <div className='d-flex flex-wrap overflow-y-hidden' style={{minHeight:'600px'}}  >
                                {

                                    props.whole_data[lists.childId]?.map((item) => {
                                        return (
                                            <>{card(item)}</>

                                        )
                                    })
                                }


                            </div>

                        </div>
                    )


                })
            }
        </>

    )
}