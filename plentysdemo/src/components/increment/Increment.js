import React from 'react'
import { useEffect } from 'react'

export default function Increment({ title, quantity, quantityHandler }) {



    return (
        <div className="d-flex ">
            <button onClick={() => quantityHandler(title, "PLUS")} className="btn btn-light btn-sm rounded-0" >
                +
            </button>
            <input type="number" id={title} className="text-center  border-1 " min="0" disabled max="10" value={quantity} />
            <button onClick={() => quantityHandler(title, "MINUS")} className="btn btn-light rounded-0 btn-sm" id='minus'>
                -
            </button>
        </div>
    )
}
