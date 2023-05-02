import React from 'react'
import Frontbanner from '../components/frontBanner/Frontbanner'
import MidBanner from '../components/midbanner/MidBanner'

import TopCategories from '../components/topCategories/TopCategories'
import _ from 'lodash';
import Productcards from '../components/productcards/Productcards';
const array_methods = require('lodash/array');

export default function MainSection(prop) {
  const data=prop.data
  console.log(data)
  const group_data= _.groupBy(data,'parentId')
 
  const topCategories_id1=group_data[1]
  return (
  <>
  <Frontbanner/>
  <MidBanner/>
  <br></br>
  
  <TopCategories catedata={topCategories_id1}/>
  <br></br>
  <Productcards/>

  </>
  )
}
