import React from 'react'




export default function Productcards(props) {
    return (
        <div className='container'>
            <h3>Whole Sale Offer</h3>
            <br></br>
            <div className='d-flex overflow-x-scroll '>


                <div className="col-md-12 col-lg-4 mb-4" >
                    <div className="card" style={{width:'300px',height:'400px'}}> 
                        <div className="d-flex justify-content-between p-3">
                            <p className="lead mb-0">Today's Combo Offer</p>
                            <div
                                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{width: '35px',height: '35px'}}>
                                <p className="text-white mb-0 small">x4</p>
                            </div>
                        </div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                            className="card-img-top" alt="Laptop" />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <p className="small"><a href="#!" className="text-muted">Laptops</a></p>
                                <p className="small text-danger"><s>$1099</s></p>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">HP Notebook</h5>
                                <h5 className="text-dark mb-0">$999</h5>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                                <div className="ms-auto text-warning">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}