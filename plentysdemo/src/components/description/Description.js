import React from 'react'
import styles from './Description.module.css'
import { wrap } from 'lodash'
function Description() {
    return (
        <div className={'vh-100 d-flex'} style={{ backgroundColor: "#0B223F", justifyContent: 'center', flexWrap: 'wrap' }}>
            <div class={"" + styles.maincontainer}>
                <div>
                    <h1 className={' ' + styles.heading}>Highlights</h1>
                    <h1 className={' ' + styles.heading}>Product Description</h1>
                    <h1 className={' ' + styles.heading}>Highlights</h1>
                </div>
            </div>

            <div className={""}>
                <h6 className={' ' + styles.heading}><i className='bi bi-check bg-success rounded-circle' style={{ fontSize: '20px' }} ></i> Highlights</h6>
            </div>


        </div>
    )
}

export default Description
