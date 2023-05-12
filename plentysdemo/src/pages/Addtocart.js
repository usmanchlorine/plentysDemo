import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdDecrement from '../state/Actions/ProdDecrementAction'

export default function Addtocart() {
  const dispatch = useDispatch()
    const cartdata=useSelector(state=>state.productIncrementReducer.prodIds)
  return (
    <div className='container-fluid px-4'>
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        cartdata.map((item,index)=>{
            
            return(
            <tr key={index} className=''>
                <th scope="row">{index+1}</th>
                <td className='d-flex ' style={{width:'100px',height:'100px'}}><img src={item.imageUrl} style={{scale:'0.5',marginTop:'-2rem'}}></img></td>
                <td>{item.title}</td>
                <td><button className='btn btn-danger'onClick={()=>dispatch(ProdDecrement(item.productId))}>Delete</button></td>
            </tr>
            )

        })
                   
    }
   
    

   
  </tbody>
</table>
<div className='d-flex justify-content-end align-items-center p-5'>
    <span className='align-self-center  px-5' style={{marginTop:'0.3rem'}}>
        <h6>Procced to </h6>
    </span>
    <button className='btn btn-primary' style={{fontWeight:600}}>Checkout</button>

</div>
    </div>
  )
}
