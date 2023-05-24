import React from 'react'
import { Link } from 'react-router-dom'
export default function EmptyCart() {
    return (
        <div className='container' id='main' style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>

            <img src='Empty Card.png'></img>
            <h3 style={{ color: "#305586" }}>Your Cart is Empty!</h3>
            <div align='center'>
                <p style={{ color: "#94A3B8", fontWeight: 'bold' }}>Looks Like You have made a Choice.</p>
                <p style={{ color: "#94A3B8", fontWeight: 'bold' }}>Yet.</p>
            </div>
            <div>
                <Link to={'/'}><button className='btn btn-primary px-5 rounded-3'> Back To Home</button></Link>
            </div>


        </div>

    )
}
