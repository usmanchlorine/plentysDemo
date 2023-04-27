import React from 'react'
import { useState } from 'react'
import styles from '../CSSModules/Navbar.module.css'
export default function Navbar() {
  const navbar_header={
    height:'80px',
    background:'#0B223F'
  }
  const navbar_rightarea={
    display:'flex',
    minWidth:'25vw',
    justifyContent:'space-around',
  
    alignItems: 'center',
    
  }
  const right_button={
    display:'flex',
    gap:'12px'
  }
  const right_icons={
    display:'flex',
    gap:'30.2px'
  }

  const baseTextColor={
    color:'white',
  }

  const [SearchContainer,SetSearchContainer]=useState({
    width:'100%',
    zIndex:1,
    position:'absolute',
    transition:'all 0.5s ease-in-out',
    marginTop:'-200px',
  })

  const [toggleSearch,setToggle]=useState(true)

  const toggleSearchHandler=()=>{
    toggleSearch===false?setToggle(true):setToggle(false)
    if (toggleSearch===true){
      SetSearchContainer(
        {
          width:'100%',
          zIndex:1,
          position:'absolute',
          transition:'all 0.5s ease-in-out',
          marginTop:'0px',
        }
      )
      
    }else{
      SetSearchContainer(
        {
          width:'100%',
          zIndex:1,
          position:'absolute',
          transition:'all 0.5s ease-in-out',
          marginTop:'-200px',
        }
      )

    }
  
  }

  








  
  return (
   <>
     {/*container when close*/}
  <div className='container-fluid' id="SearchContainer" style={{...navbar_header,...SearchContainer}}>
    <div className='Container'>
    
      <input className='input' type='text' id="searchContent" placeholder="Search"/>
        
     

    </div>
  </div>

  {/*container when open*/}
  <nav className={`navbar navbar-expand-lg px-4`} style={navbar_header}>
    
  <div className="container-fluid">
  <i class="bi bi-list px-1" style={{...baseTextColor,fontSize:'20px'}}></i>
    <a className="navbar-brand text-white" href="#"><img src='Logo-v3 1.png'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{...baseTextColor}}>Flesh deals</a>
        </li>
    
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{...baseTextColor}}>
            Karachi
          </a>
          <ul className="dropdown-menu" style={{...baseTextColor}}>
            <li><a className="dropdown-item" href="#">Lahore</a></li>
            <li><a className="dropdown-item" href="#">Islamabad</a></li>
            <li><a className="dropdown-item" href="#">Multan</a></li>
          </ul>
        </li>
    
      </ul>
      <div className='d-flex' style={navbar_rightarea}>
      <span className=''style={right_icons}>
        <span onClick={toggleSearchHandler}>
        <i className='bi-search text-white' ></i>
        </span>
        
        <i class="bi bi-whatsapp text-success"></i>
        <i class="bi bi-cart text-white"></i>
      </span>
      <span style={right_button}>
      <button type="button" className="btn btn-primary">Success</button>
      <button type="button" className="btn btn-outline-primary"><span className='text-white'>Signup</span></button>

      </span>
      
    
      </div>
      
    </div>
  </div>
</nav>

   </>
  )
}
