import React from 'react'
import styles from './footer.module.css'
export default function Footer() {
    return (
        <div className={'container-fluid ' + styles.footerback}>
            <div className="container-fluid mx-auto px-5 text-white">
                <div className="row justify-content-center top-part">
                    <div className="col-md-12 text-center center-content">
                        <div className={" px-4 pt-5 " + styles.logo}>
                            <img src='Logo-V3 1.png'></img>
                        </div>

                        <div className={" gap-3 mt-2  pt-5 " + styles.Socials} style={{}}>
                            <p className='' style={{ fontSize: '20px', marginBlock: 'inherit' }}>Social&nbsp;Links</p>
                            <span className={"px-3 bg-white " + styles.sociallinks}><i className='bi bi-twitter'></i></span>
                            <span className={"px-3 bg-white " + styles.sociallinks}><i className='bi bi-facebook'></i></span>
                            <span className={"px-3 bg-white " + styles.sociallinks}><i className='bi bi-instagram'></i></span>
                            <span className={"px-3 bg-white " + styles.sociallinks}><i className='bi bi-linkedin'></i></span>
                            <span className={"px-3 bg-white " + styles.sociallinks}><i className='bi bi-whatsapp'></i></span>
                            <span className={"px-3 bg-white " + styles.sociallinks}><i className='bi bi-youtube'></i></span>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="line mb-3 mx-auto"></div>
                    <div className="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
                        <div className="p-2 flex-fill bd-highlight mb-5 mb-md-0">
                            <h5>Company</h5>
                            <small align="left"><a className={'nav-link px-0 ' + styles.footer_links}>About us</a></small>
                            <small align="left"><a className={'nav-link px-0 ' + styles.footer_links}>Privacy Policy</a></small>
                            <small align="left"><a className={'nav-link px-0 ' + styles.footer_links}>Terms and Conditions</a></small>
                            <small align="left"><a className={'nav-link px-0 ' + styles.footer_links}>Shipping Policy</a></small>
                            <small align="left"><a className={'nav-link px-0 ' + styles.footer_links}>FAQs</a></small>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">Customer Care</h5>
                            <a className={'nav-link px-0 ' + styles.footer_links}>Return Policy</a>
                            <a className={'nav-link px-0 ' + styles.footer_links}>Contact Us</a>
                            <a className={'nav-link px-0 ' + styles.footer_links}>Tracking</a>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <h5 className="places">Sell with Us</h5>
                            <a className={'nav-link px-0 ' + styles.footer_links}>Become Vendor</a>
                        </div>
                        <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                            <img src='plentysQrCode.png'></img>
                        </div>
                        <div className="p-2 flex-fill justify-content-between bd-highlight mb-3 mb-md-0">
                            <div className='d-flex gap-4'>
                                <span><img src='Play store.png'></img></span>
                                <span className=''><img src='App store.png'></img></span>
                            </div>
                            <br></br>
                            <h5>Newsletter</h5>

                            <div className={'d-flex p-1 align-items-center justify-content-between ' + styles.footerinput}>
                                <span className='flex-grow-1'><input className={styles.footerinput} placeholder='Search'></input></span>
                                <span><button className={'btn btn-primary mr-1 ' + styles.footerbutton} style={{ fontSize: '16px', fontWeight: '600' }}>Send</button></span>
                            </div>

                            <div className='py-1'>
                                <span><input name="cssCheckbox" type="checkbox" className={styles.csscheckbox} /></span>
                                <span className='px-1'><small style={{ color: "#74A4E2" }}>I agree with Privacy Policy and Terms of Conditions</small></span>
                            </div>

                        </div>

                    </div>
                    <div className="line mb-3 mx-auto"></div>
                </div>
                <div className={" bottom-part " + styles.fotterbelow} style={{ borderTop: '1px solid white' }}>
                    <div className="d-lg-flex bd-highlight col-md-12  mb-5">
                        <div className="p-2 align-self-center   bd-highlight">
                            <img src="twocircle.png" className='px-1'></img>
                            <img src="Visa.png" className='px-1'></img>
                            <img src="unionpay.png" className='px-1'></img>
                        </div>

                        <div className=" pt-2 bd-highlight">
                            <div className=" px-2 grey-text">&nbsp;&nbsp;<span id="contact" style={{ color: "#74A4E2" }}>© 2022 - 2023, All rights reserved by Plentys.pk</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
