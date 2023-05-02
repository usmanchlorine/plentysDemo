import React from 'react';
import { useState, useEffect } from'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import MainSection from './pages/MainSection';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchdata()
    
  }, [])



  let fetchdata = async () =>{
  
    let response=await fetch('https://api.plentys.pk/api/v1/public/allCategories?cityId=1')
    let parsedata=await response.json()
  
    setData(parsedata.data)

   
      
  }



  return (
    <>
     <Navbar data={data}/>
     <Routes>
        <Route path="/Notfound" element={<Page404/>}/>
        <Route path="/" element={<MainSection data={data}/>}/>
     </Routes>
     
    
    </>
  );
}

export default App;
