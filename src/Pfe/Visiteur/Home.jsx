import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import Services from './Services'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

function Home() {
  const location =useLocation();
  useEffect(()=>{
    console.log(location);
    
  },[])
  return (
    <main>
      
      <Box sx={{ p: 4, m: 2 }}>

      <ImageSlider/>
      <Services/>
      </Box>
    </main>
  )
}

export default Home
