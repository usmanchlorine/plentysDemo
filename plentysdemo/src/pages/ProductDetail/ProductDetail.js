import React, { useState } from 'react'
import './Product.css'

import Ratingpage from '../../components/ratingpage/Ratingpage'
import PageDescription from '../../components/PageDescription/PageDescription'

export default function ProductDetail() {
    const changeImage = (event) => {
        console.log('hello')
        console.log(event.target.src)
        var main_prodcut_image = document.getElementById('main_product_image');
        main_prodcut_image.src = event.target.src;


    }
    const [quantity, setQuantity] = useState(1)

    const [color, setColor] = useState("blue")

    const changeColor = (event) => {
        console.log(event.target.getAttribute("Key"))
        setColor(event.target.getAttribute("key"));

    }

    return (
        <>
            <div class="container mt-5 mb-5">

                <div class="row">
                    <div class="col-md-6  border-end">
                        <div class="d-flex flex-column justify-content-center">
                            <div class="main_image"> <img src="https://plentyspkimages.s3.amazonaws.com/1672399460706premium_basmati_rice_5_kg_flakpremum_golden_05_kg_khi_01_1_jpg" id="main_product_image" width="350" />
                            </div>
                            <div class="thumbnail_images">
                                <ul id="thumbnail">
                                    <li><img onClick={changeImage} src="https://plentyspkimages.s3.amazonaws.com/1666788626539fortifed_chakki_atta_5_kg_sndrigeata_orangee_05_kg_khi_01_jpg" width="70" /></li>
                                    <li><img onClick={changeImage} src="https://plentyspkimages.s3.amazonaws.com/1672399460706premium_basmati_rice_5_kg_flakpremum_golden_05_kg_khi_01_1_jpg" width="70" /></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 right-side">
                            <div class="mt-2 pr-3 content">
                                <h4>Brand:NYX</h4>
                            </div>
                            <div class="mt-2 pr-3 content d-flex align-items-center">
                                <h3 className='headingprice'>PKR 12543 <span><del style={{ color: "red" }}>PKR 16000</del></span></h3>

                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <h3 className='heading'>Product heading</h3>

                            </div>


                            <div class="ratings d-flex flex-row align-items-center">
                                <div class="d-flex flex-row"> <i class='bi bi-star' ></i> <i class='bi bi-star' ></i>
                                    <i class='bi bi-star' ></i> <i class='bi bi-star' ></i> <i class='bi bi-star' ></i> </div>
                                <span>441 reviews</span>
                            </div>
                            <div class="mt-2"> <span class="fw-bold" >Color:<span style={{ color: color, paddingLeft: '5px' }}>{color}</span></span>
                                <div class="colors">
                                    <ul id="marker">
                                        <li id="marker-1" onClick={changeColor} style={{ backgroundColor: 'blue', }} Key={'blue'}></li>
                                        <li id="marker-2" onClick={changeColor} style={{ backgroundColor: 'orange' }} Key={'orange'}></li>
                                        <li id="marker-3" onClick={changeColor} style={{ backgroundColor: 'black' }} Key={'black'}></li>
                                        <li id="marker-4" onClick={changeColor} style={{ backgroundColor: 'red' }} Key={'red'}></li>
                                        <li id="marker-5" onClick={changeColor} style={{ backgroundColor: 'yellow' }} Key={'yellow'}></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex flex-row mt-4 align-items-center'>
                                <input type="button" value="-" class="button-minus border rounded px-2 icon-shape icon-lg mx-1 " data-field="quantity" />
                                <input type="number" disabled step="1" max="10" value="1" name="quantity" class="quantity-field border-0 text-center w-25" />
                                <input type="button" value="+" class="button-plus border rounded px-2 icon-shape icon-lg lh-0" data-field="quantity" />

                            </div>
                            <div class="buttons d-flex flex-row mt-5 gap-3">
                                <button class="btn btn-warning flex-grow-1" id='addtocart'>Add to Cart {'>'} </button>
                                <button class="btn btn-dark " id="addtocart" style={{ width: '5em' }}><i className='bi bi-heart-fill'></i></button>

                            </div>



                        </div>
                    </div>
                </div>



            </div>
            <PageDescription />
            <Ratingpage />
        </>




    )
}
