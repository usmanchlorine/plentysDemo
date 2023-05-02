import React from 'react'
import styles from './midBanner.module.css'
export default function MidBanner() {
    return (
        <div className={'container '+styles.crousal}>
            <div id="carouselExampleIndicators" className={"carousel slide "} data-ride="carousel">
                <ol className="carousel-indicators" style={{marginBottom:'30px'}}>
                    <li data-target="#carouselExampleIndicators" className={'border rounded '+styles.indicator} data-slide-to="0" ></li>
                    <li data-target="#carouselExampleIndicators" className={'border rounded '+styles.indicator}  data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators"  className={'border rounded '+styles.indicator} data-slide-to="2"></li>
                </ol>
                <div className={"carousel-inner "+styles.crousal}>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="Rectangle 789.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="Rectangle 789.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="Rectangle 789.png" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}
