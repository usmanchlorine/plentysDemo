import React from 'react'

import styles from './topcategories.module.css'

function TopCategories_card(props) {
  const LIST_OF_CLASSES =props.carddata
  var colors = ['primary', 'success', 'danger', 'warning'];


  const random_color=()=>{
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <>
    {

    
    LIST_OF_CLASSES?.map((item) => {
      return(
       
        <div className= {" mx-1 px-3 "+ `bg-${random_color()}`} style={{width:"max-content",height:'200px',display:'inline-block',whiteSpace:'nowrap',borderRadius:'10px'}}  key={item.childId}>
      
          <p className={" py-3 nav-link " + styles.categories_list}>{item.name}</p>
        </div>


      )
      
      
      })
      
      }
 
 </>

)}
  





export default function TopCategories(props) {
  console.log(props.catedata)
  return (
    <div className='container'>
        <h3>Shop Our Top Categories</h3>
        <br></br>
        <div className='d-flex overflow-x-scroll '>
        <TopCategories_card carddata={props.catedata} />
        </div>
      
    </div>
  )
}