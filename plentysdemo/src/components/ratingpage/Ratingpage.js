import React from 'react'
import styles from './Rating.module.css'
export default function Ratingpage() {
    return (
        <div className='container-fluid' style={{ height: '1000px' }}>
            <div className={'d-flex justify-content-around ' + styles.uppersection}>
                <h4 className={' ' + styles.ratingReview}>Rating and Reviews</h4>
                <button className={'btn ' + styles.writeReview}>Write a Review</button>

            </div>


            <div className='container mt-5'>
                <form>
                    <p className={'' + styles.ratingheading}>Rating</p>
                    <div class={styles.rate}>
                        <input type="radio" id="star5" name={styles.rate} value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name={styles.rate} value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name={styles.rate} value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name={styles.rate} value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name={styles.rate} value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='mt-3'>
                        <p className={' ' + styles.ratingheading} >Review Title</p>
                        <input className={"rounded " + styles.inputrating} style={{ height: '46px' }} type='text' placeholder='Give your Review a Title'></input>
                    </div>

                    <div className='mt-3'>
                        <p className={' ' + styles.ratingheading}>Review</p>
                        <textarea className={"rounded " + styles.inputrating} type='text' rows='5' placeholder='Give your Review a Title'></textarea>
                    </div>


                    <div className='mt-3'>
                        <p className={' ' + styles.ratingheading}>Picture/Video (optional)</p>
                        <label for="upload-photo"><img src='upload.png'></img></label>
                        <input type="file" name="photo" id="upload-photo" style={{ visibility: 'hidden' }} />

                    </div>


                    <div className='mt-3 d-flex gap-2'>
                        <span><button className='btn' style={{ backgroundColor: '#0B223F', fontWeight: '600', color: 'white' }}>cancel</button></span>
                        <span><input type='submit' className='btn' style={{ backgroundColor: '#009FD1', fontWeight: '600', color: 'white' }} /></span>

                    </div>





                </form>


            </div>


        </div>
    )
}
