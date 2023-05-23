import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdDecrement from '../state/Actions/ProdDecrementAction'
import EmptyCart from '../components/EmptyCart'

function NoProduct() {
  return (

    <h1 className='' style={{ position: 'absolute', textAlign: 'center', color: 'gray' }}>No Products Added </h1>



  )
}









export default function Addtocart() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    })

  }, [])





  const [totalprice, setTotalPrice] = useState(0)
  const [numofItems, setNumOfItems] = useState(0)
  const dispatch = useDispatch()
  const cartdata = useSelector(state => state.productIncrementReducer.prodIds)



  useEffect(() => {
    let sum = 0;
    let numofItems = 0
    cartdata.forEach(item => {
      sum += item.minPrice;
      numofItems++;
    })
    setTotalPrice(sum);
    setNumOfItems(numofItems);
    console.log(sum)

  }, [cartdata])

  // const calculate = () => {
  //   let sum = 0;
  //   let numofItems = 0
  //   cartdata.forEach(item => {
  //     sum += item.minPrice;
  //     numofItems++;
  //   })
  //   setTotalPrice(sum);
  //   setNumOfItems(numofItems);
  //   console.log(sum)
  // }
  if (cartdata.length != 0) {

    return (

      <div className='container-fluid px-4 row'>
        <div className='col-md-9'>
          <table class="table table-borderless" style={{ position: 'relative' }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                cartdata.length != 0
                  ?
                  cartdata.map((item, index) => {

                    return (
                      <tr key={index} className=''>
                        <th scope="row">{index + 1}</th>
                        <td className='d-flex ' style={{ width: '100px', height: '100px' }}><img src={item.imageUrl} style={{ scale: '0.5', marginTop: '-2rem' }}></img></td>
                        <td>{item.title}</td>
                        <td>Rs {item.minPrice}</td>
                        <td><button className='btn btn-danger' onClick={() => dispatch(ProdDecrement(item.productId))}>Delete</button></td>
                      </tr>
                    )

                  })
                  : ""

              }




            </tbody>
          </table>
          <div className='d-flex justify-content-end align-items-center p-5'>
            <span className='align-self-center  px-5' style={{ marginTop: '0.3rem' }}>
              <h6>Procced to </h6>
            </span>
            <button className='btn btn-primary' style={{ fontWeight: 600 }}>Checkout</button>

          </div>

        </div>

        <div className='col-md-3'>
          <div className='d-flex p-2 px-3 flex-column justify-content-around mt-5 mb-5 py-5 shadow-lg text-white rounded-3' style={{ width: '100%', backgroundColor: '#0B223F' }}>
            <div className='d-flex flex-row justify-content-between'>
              <h2>Payment Summary</h2>
            </div>
            <div className='d-flex flex-row justify-content-between mt-2' style={{ width: '100%', borderBottom: '1px solid white' }}>

            </div>
            <div className='d-flex flex-row justify-content-between'>
              <h3>items({numofItems})</h3>
              <h3>PKR {totalprice}</h3>
            </div>

            <div className='d-flex flex-row justify-content-between mt-1'>
              <h3>Shipping</h3>
              <h3>Free</h3>
            </div>


            <div className='d-flex flex-row justify-content-between mt-3' style={{ width: '100%', borderBottom: '1px solid white' }}>

            </div>


            <div className='d-flex flex-row justify-content-between mt-3' >
              <h3 >Total to pay</h3>
              <h3 style={{ fontWeight: '900' }}>PKR {totalprice}</h3>
            </div>



            <div className='d-flex flex-row justify-content-between mt-3' >
              <button className='Btn btn-primary text-white flex-grow-1 rounded-3 py-3 ' style={{ fontWeight: '700' }}>Check Out</button>
            </div>




          </div>


        </div>

      </div>
    )

  } else {
    return (
      <EmptyCart />
    )
  }


}
