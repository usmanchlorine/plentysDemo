import React from 'react'

export default function Page404() {
  return (
    <div className='container' id='main' style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>

        <img src='Search.png'></img>
        <h3 style={{color:"#305586"}}>No product  found!</h3>
        <div align='center'>
        <p  style={{color:"#94A3B8",fontWeight:'bold'}}>We couldn’t find any search results.</p>
        <p  style={{color:"#94A3B8",fontWeight:'bold'}}>Give it an another go </p>
        </div>
        
        
    </div>
  )
}
