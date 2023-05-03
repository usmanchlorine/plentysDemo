import React from 'react'
import styles from './footer.module.css'
export default function Footer() {
    return (
        <div className={'container-fluid ' + styles.footerback}>
            <div className="container-fluid mx-auto px-5 text-white">
                <div className="row justify-content-center top-part">
                    <div className="col-md-12 text-center center-content">
                        <div className="float-left px-4 pt-5">
                            <img src='Logo-V3 1.png'></img>
                        </div>

                        <div className="d-flex justify-content-end  gap-3 mt-3 mr-3 pt-5">
                            <p className='' style={{fontSize:'20px',textAlign:""}}>Socials</p>
                            <span className={"px-3 bg-white " +styles.sociallinks}><i className='bi bi-twitter'></i></span>
                            <span className={"px-3 bg-white "+styles.sociallinks}><i className='bi bi-facebook'></i></span>
                            <span className={"px-3 bg-white "+styles.sociallinks}><i className='bi bi-instagram'></i></span>
                            <span className={"px-3 bg-white "+styles.sociallinks}><i className='bi bi-linkedin'></i></span>
                            <span className={"px-3 bg-white "+styles.sociallinks}><i className='bi bi-whatsapp'></i></span>
                            <span className={"px-3 bg-white "+styles.sociallinks}><i className='bi bi-youtube'></i></span>
                        </div>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="line mb-3 mx-auto"></div>
                    <div className="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
                        <div className="p-2 flex-fill bd-highlight mb-5 mb-md-0">
                            <h3>itCraft</h3>
                            <small>Copyright &copy 2019</small>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">BYDGOCZCZ</h5>
                            <p className="mb-0">Bydgoszcz Centrum Burnesa</p>
                            <p className="mb-0">ul Pzzenmdcwa 25, ibsura 24,</p>
                            <p className="mb-0">B5-7GB Bydgosrdz, Poland</p>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">TORUN</h5>
                            <p className="mb-0">ul Reyana 2-4</p>
                            <p className="mb-0">A0-100 Torun,</p>
                            <p className="mb-0">Poland</p>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">WARSAW</h5>
                            <p className="mb-0">Brain Embassy</p>
                            <p className="mb-0">Alaya Jerasublisuble RS123</p>
                            <p className="mb-0">02-222 Warsawa</p>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">LONDON</h5>
                            <p className="mb-0">Google Campus</p>
                            <p className="mb-0">4-5 Barnhill, Shaneditch</p>
                            <p className="mb-0">London EC2A 4BK</p>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">NORWAY</h5>
                            <p className="mb-0">Kristiansand</p>
                        </div>
                    </div>
                    <div className="line mb-3 mx-auto"></div>
                </div>
                <div className="row bottom-part">
                    <div className="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
                        <div className="p-2 align-self-center flex-fill bd-highlight">
                            <div className="fa fa-facebook px-2"></div>
                            <div className="fa fa-linkedin px-2"></div>
                            <div className="fa fa-twitter px-2"></div>
                            <div className="fa fa-instagram px-2"></div>
                        </div>
                        <div className="p-2 row flex-fill bd-highlight justify-content-left">
                            <div className="p-2 d-lg-flex">
                                <div className="p-2 flex-fill d-flex bd-highlight">Services</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Portfolio</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Pricing</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Testimonials</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Team</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Blog</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Carrer</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">How we work</div>
                                <div className="p-2 flex-fill d-flex bd-highlight">Manifesto</div>
                            </div>
                        </div>
                        <div className="p-2 align-self-center flex-fill bd-highlight">
                            <div className="fa fa-mobile px-2 grey-text">&nbsp;&nbsp;<span id="contact">888-777-666</span></div>
                            <div className="fa fa-envelope-o px-2 grey-text">&nbsp;&nbsp;info@itcraft.in</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
