import React, { useEffect, useState } from 'react'
import ProdIncrement from '../../state/Actions/ProdIncrementAction';
import styles from './productcards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { allCards } from '../../state/Actions/showAllCardsAction';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import { ProductDetailAction } from '../../state/Actions/ProductDetailAction';
const colorfill = (event) => {
    /// ternary operatos
    event.target.style.color === "red" ? event.target.style.color = "gray" : event.target.style.color = "red";


}


const Showcased = (props) => {



}





function Card(props) {
    const carddata = props.item;
    const dispatch = useDispatch()
    const cartitems = useSelector(state => state.productIncrementReducer.prodIds)
    var rating = parseInt(carddata.avgRating)
    if (rating == NaN) {

        rating = 0
    }


    return (
        <>

            <div className={` col-sm-12 col-md-6 col-lg-${props.col} mb-3`} >

                <div className="card bg-white border-0 " style={{ width: '100%', height: '500px', position: 'relative' }}>
                    <Link exact to={`/productdetail`} onClick={() => dispatch(ProductDetailAction(carddata))}>
                        <span class={"badge badge-danger " + styles.badge_discount}>{carddata.productCondition}</span>
                        <span class={"badge badge-light " + styles.badge_discount2}><i onClick={colorfill} className="bi bi-heart-fill"></i></span>
                        <img src={carddata.imageUrl}
                            className={"card-img-top " + styles.imgcard} alt="Laptop" />

                    </Link>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4 style={{ whiteSpace: 'nowrap' }}>{carddata.brand}</h4>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p style={{ marginBottom: "0.2rem" }}>{carddata.title}</p>
                        </div>

                        <div className="d-flex justify-content-start mb-1 ">
                            <div className="text-warning">


                                {
                                    Array.from(Array(5), (e, i) => {
                                        if (i + 1 < rating) {
                                            return <i className='bi bi-star-fill'></i>
                                        }
                                        return <i className='bi bi-star'></i>


                                    })
                                }




                            </div>
                            <span className='ml-1'>{(`(${carddata.numberOfReview})`)}</span>

                        </div>


                        <div className="d-flex align-items-center mb-1">
                            {cartitems.some((cartitem) => cartitem.productId === carddata.productId)
                                ? <button className='btn btn-success ' style={{ padding: '15px 30px', fontSize: '14px', fontWeight: 'bold' }}><Link to="/addtocart"><i className="bi bi-cart text-white">Go to cart</i></Link></button>
                                : <button className='btn btn-warning' style={{ padding: '15px 30px', fontSize: '14px', fontWeight: 'bold' }} onClick={() => dispatch(ProdIncrement({ ...carddata, quantity: 1 }))}>Add to cart</button>
                            }

                            <div className='w-50 ' style={{ alignSelf: 'end', position: 'relative', height: 'inherit', minHeight: '50px' }} >
                                <p className="small text-danger" style={{ float: '', marginBottom: '0.2rem', position: 'absolute', top: '0px', right: '0px' }}><s>rs99</s></p>
                                <h6 className="" style={{ alignSelf: 'center', position: 'absolute', bottom: '0px', right: '3px', color: "#284975" }}>Rs{carddata.minPrice}</h6>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}





export default function Productcards(props) {
    console.log(props.heading);
    const decommisned = []
    const cardsDATA = useSelector(state => state.getProductReducer)
    console.log("this is ", cardsDATA)
    const dispatch = useDispatch()
    let showcase = 1;





    return (
        <>
            {




                <div className='container' style={{ height: "max-content" }}>
                    <h3 className={'' + styles.heading}>{cardsDATA.wholeSale ? `Plentys Mart` : null}</h3>
                    <br></br>
                    <div className='d-flex flex-wrap overflow-y-hidden' style={{ minHeight: '0px' }}  >
                        <div className={'' + styles.productbanners}><img src='https://propakistani.pk/wp-content/uploads/2022/08/plenty.jpg' width={'100%'} /></div>
                        {
                            cardsDATA.PlentysMart?.map((item, index) => {
                                if (index < 6) {
                                    return (

                                        <>{<Card item={item} col={4} />}</>
                                    )

                                }
                                return;

                            })
                        }
                        <div className='d-flex align-items-center justify-content-center' style={{ flexShrink: 1, flexGrow: 1 }}>
                            <Link to={"/allCards"}><button class="button-86" role="button" onClick={() => { dispatch(allCards(cardsDATA.PlentysMart)) }} >Show More</button></Link>
                        </div>

                    </div>



                    <h3 className={'' + styles.heading}>{cardsDATA.wholeSale ? `Whole Sale` : null}</h3>
                    <br></br>
                    <div className='d-flex flex-wrap overflow-y-hidden' style={{ minHeight: '0px' }}  >
                        <div className={'' + styles.productbanners}><img src='https://propakistani.pk/wp-content/uploads/2022/08/plenty.jpg' alt='Logo-V3 1.png' width={'100%'} /></div>
                        {
                            cardsDATA.wholeSale?.map((item, index) => {
                                if (index < 6) {
                                    return (

                                        <>{<Card item={item} col={4} />}</>
                                    )

                                }
                                return;

                            })
                        }
                        <div className='d-flex align-items-center justify-content-center' style={{ flexShrink: 1, flexGrow: 1 }}>

                            <Link to={"/allCards"}><button class="button-86" role="button" onClick={() => { dispatch(allCards(cardsDATA.wholeSale)) }}>Show More</button></Link>
                        </div>
                    </div>







                    <h3 className={'' + styles.heading}>{cardsDATA.BeautyGrooming ? `Beauty And Grooming` : null}</h3>
                    <br></br>
                    <div className='d-flex flex-wrap overflow-y-hidden' style={{ minHeight: '0px' }}  >


                        {

                            cardsDATA.BeautyGrooming?.map((item, index) => {

                                if (index < 6) {
                                    if (index == 0) {

                                        return <div className={'' + styles.productbanners}><img src='Rectangle 821.png' width={'100%'} /></div>
                                    }
                                    return (

                                        <>{<Card item={item} col={4} />}</>
                                    )

                                }
                                return;

                            })


                        }
                        <div className='d-flex align-items-center justify-content-center' style={{ flexShrink: 1, flexGrow: 1 }}>

                            <Link to={"/allCards"}><button class="button-86" role="button" onClick={() => { dispatch(allCards(cardsDATA.BeautyGrooming)) }}>Show More</button></Link>
                        </div>
                    </div>
                </div>






            }
        </>

    )
}


export { Card }