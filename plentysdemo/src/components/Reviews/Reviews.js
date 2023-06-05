import React from 'react'
import "./Reviews.css"
export default function Reviews() {
    return (
        <div className=" container  py-3 px-4 mb-5 border border-primary rounded-4">
            <div className="row d-flex ">
                <div className=' d-flex mt-1 justify-content-between  '>
                    <div className='d-flex text-warning'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star'></i>
                        <i className='bi bi-star'></i>
                        <i className='bi bi-star'></i>
                    </div>
                    <div className=''>
                        <p className='' style={{ color: "gray", fontWeight: '600' }}>19-june-2019</p>
                    </div>

                </div>

                <div className="d-flex flex-column  position-relative ">
                    <h5 className="mt-2 mb-0" style={{ color: "#0B223F" }}>by Mukesh Kumar</h5>
                    <div className='d-flex gap-1 flex-column position-absolute' style={{ right: '10px' }}>
                        <i className=''><img src='edit.png' /></i>
                        <i className='bi bi-trash text-danger'></i>


                    </div>

                </div>

            </div>
            <div className="row text-left" style={{ color: "#284975" }}>
                <h5 className=" mt-3">An awesome activity to experience</h5>
                <p className="content">If you really enjoy spending your vacation 'on water' or would like to try something new and exciting for the first time.</p>
            </div>
            <div className="row text-left overflow-hidden ">
                <img className="pic " src="https://i.imgur.com/kjcZcfv.jpg" /> <img className="pic" src="https://i.imgur.com/SjBwAgs.jpg" /> <img className="pic" src="https://i.imgur.com/IgHpsBh.jpg" />
            </div>

        </div>
    )
}
