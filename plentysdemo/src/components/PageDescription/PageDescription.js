import React from 'react'
import './pageDescription.css'
export default function PageDescription() {
    return (
        <div class="row overflow-x-hidden">
            <div class="col-md-5 " style={{ backgroundColor: "#0B223F", height: '1000px', paddingLeft: '10rem', paddingTop: '10rem' }}>
                <h1 className={' text-warning'}>Highlights</h1>
                <h1 className={' mt-5 text-light'}>Product Description</h1>
                <h1 className={' mt-5 text-light '}>Highlights</h1>
            </div>
            <div class="col-md-7 headingmaterial " style={{ height: '1000px', backgroundColor: "#0B223F", paddingTop: '10rem' }}>
                <div className={'d-flex flex-column gap-3 '}>
                    <h6 className={'text-light'}> <i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px', letterSpacing: "3px" }} ></i> Delightfully Creamy Matte</h6>
                    <h6 className={'text-light'}><i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px', letterSpacing: "3px" }} ></i> High-Pigmented</h6>
                    <h6 className={'text-light'}><i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px', letterSpacing: "3px" }} ></i> Durable and Lightweight</h6>
                </div>
            </div>
        </div>
    )
}
