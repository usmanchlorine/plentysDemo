import React from 'react'
import styles from './Description.module.css'
function Description() {
    return (
        <div className={'vh-100 ' + styles.description} style={{ backgroundColor: "#0B223F", justifyContent: 'center', flexWrap: 'wrap', paddingTop: '12em' }}>
            <div class={"" + styles.maincontainer}>
                <div>
                    <h1 className={'text-warning ' + styles.heading}>Highlights</h1>
                    <h1 className={' ' + styles.heading}>Product Description</h1>
                    <h1 className={' ' + styles.heading}>Highlights</h1>
                </div>
            </div>

            <div className={"d-flex flex-column gap-5 pr-5"}>
                <h6 className={'text-light'}> <i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px', letterSpacing: "3px" }} ></i> Delightfully Creamy Matte</h6>
                <h6 className={'text-light'}><i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px', letterSpacing: "3px" }} ></i> High-Pigmented</h6>
                <h6 className={'text-light'}><i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px', letterSpacing: "3px" }} ></i> Durable and Lightweight</h6>
            </div>


        </div >
    )
}

export default Description
