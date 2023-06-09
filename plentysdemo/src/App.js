import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import MainSection from './pages/MainSection';
import Footer from './components/footer/Footer';
import Addtocart from './pages/Addtocart';
import fetchBanners from './state/Actions/bannerApi';
import { useDispatch } from 'react-redux';
import AllProductcards from './pages/AllProductcards';
import Signup from './pages/SignupPage/Signup';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import RegisterPage from './pages/RegisterPage/RegisterPage';


function App() {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetchdata()
    // localStorage.getItem('bannerData')?setBannerData(JSON.parse(localStorage.getItem('bannerData'))):fetchBanners()
    dispatch(fetchBanners())


  }, [])



  let fetchdata = async () => {

    let response = await fetch('https://api.plentys.pk/api/v1/public/allCategories?cityId=1')
    let parsedata = await response.json()

    setData(parsedata.data)

    //https://api.plentys.pk/api/v1/public/allCategories?cityId=1'

  }









  return (
    <>
      <Navbar data={data} />
      <Routes>
        <Route path="/Notfound" element={<Page404 />} />
        <Route path="/" element={<MainSection data={data} />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/allCards/:id?" element={<AllProductcards />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/productdetail/:productId?" element={<ProductDetail />} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
