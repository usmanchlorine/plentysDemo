import React from 'react'
import styles from './frontBanner.module.css'
export default function Frontbanner() {
  return (
    <div className={'container-fluid '+styles.maincontainer}>
      <div style={{paddingLeft:'20px'}}>
          <img src='shoppingbag.png' className={styles.shoppingbag1}  ></img>
      </div>
      <div className={styles.mainContFront}>
        <img src='Scroll Karo Shop Karo.png'></img>     
        <img src='isolation_Mode.png'style={{scale:'1'}}></img>
        <div >
        <span style={{paddingRight:'14px'}} ><a  href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1"><img className='' src='Play store.png' role='button'></img></a></span>
        <span style={{paddingLeft:'14px'}}><a  href="https://apps.apple.com/us/app/plentys-pk/id1602220883"><img className='' src='App store.png' role='button'></img></a></span>
      </div>
      </div>

      <div className={styles.shoppingbag1} >
          <img src='info_Bar.png'></img>
      </div>

      

    </div>
  )
}
