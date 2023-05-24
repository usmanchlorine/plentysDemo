import React, { useEffect } from 'react'
import Frontbanner from '../components/frontBanner/Frontbanner'
import MidBanner from '../components/midbanner/MidBanner'

import TopCategories from '../components/topCategories/TopCategories'
import _ from 'lodash';
import Productcards from '../components/productcards/Productcards';
import { useDispatch } from 'react-redux';
import { GET_BUEATY, GET_WHOLESALE, ProductsPlentysMart, GET_PlentysMart } from '../state/Actions/ProductsApi';

export default function MainSection(prop) {
  const data = prop.data
  const group_data = _.groupBy(data, 'parentId')
  console.log(group_data)
  const topCategories_id1 = group_data[1]
  const dispatch = useDispatch()
  const productActions = [GET_BUEATY, , GET_PlentysMart, GET_WHOLESALE]

  useEffect(() => {
    // topCategories_id1?.forEach((category,index)=>{
    //   if (index<3){
    //     dispatch(ProductsPlentysMart(category.childId,productActions[index],category.name))
    //   }

    // })

    dispatch(ProductsPlentysMart(1949, GET_PlentysMart))
    dispatch(ProductsPlentysMart(1955, GET_WHOLESALE))
    dispatch(ProductsPlentysMart(5, GET_BUEATY))


  }, [topCategories_id1])


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    })

  }, [])






  return (
    <>
      <Frontbanner />
      <MidBanner />
      <br></br>

      <TopCategories catedata={topCategories_id1} />
      <br></br>
      <Productcards heading={topCategories_id1} whole_data={group_data} />

    </>
  )
}
