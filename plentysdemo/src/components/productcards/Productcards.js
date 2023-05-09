import React from 'react'
import ProdIncrement from '../../state/Actions/ProdIncrementAction';
import styles from './productcards.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const colorfill = (event) => {
    /// ternary operatos
    event.target.style.color === "red" ? event.target.style.color = "gray" : event.target.style.color = "red";


}



function Card(props) {
    const carddata = props.item;
    const dispatch=useDispatch()
    const cartitems=useSelector(state=>state.productIncrementReducer.prodIds)

    return (
        <>
            <div className="col-md-12 col-lg-4 mb-3" >
                <div className="card bg-white border-0 " style={{ width: '300px', height: '500px', position: 'relative' }}>
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
                        {cartitems.some((cartitem)=>cartitem.childId===carddata.childId)
                        ?<button className='btn btn-success ' style={{ padding: '15px 30px', fontSize: '14px', fontWeight: 'bold' }}><Link to="/addtocart"><i className="bi bi-cart text-white">Go to cart</i></Link></button>
                        :<button className='btn btn-warning'style={{ padding: '15px 30px', fontSize: '14px', fontWeight: 'bold' }} onClick={()=>dispatch(ProdIncrement(carddata))}>Add to cart</button>
                        }
                            
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
    console.log(props.heading);
   const decommisned=['Flash Deals','Celebrations','Wholesale Offer']
    return (
        <>
            {
               
                props.heading?.map((lists) => {
                    if (!decommisned.includes(lists.name)){
                        return (
                            <div className='container' style={{height:"max-content"}}>
                                <h3>{lists.name}</h3>
                                <br></br>
                                <div className='d-flex flex-wrap overflow-y-hidden' style={{minHeight:'0px'}}  >
                                    <div className={'flex-grow-2 d-flex justify-content-center align-items-center '+styles.productbanners}><img src='https://propakistani.pk/wp-content/uploads/2022/08/plenty.jpg' style={{objectFit:'fill'}}></img></div>
                                    {
    
                                        props.whole_data[lists.childId]?.map((item) => {
                                            return (
    
                                                <>{<Card item={item}/>}</>
    
                                            )
                                        })
                                    }
    
    
                                </div>
    
                            </div>
                        )
                        
                    }
                    


                })
            }
        </>

    )
}