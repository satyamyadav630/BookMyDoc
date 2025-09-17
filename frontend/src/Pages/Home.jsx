import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banners from '../components/Banners'

export const Home = () => {
  return (
    <div>
      <Header/> 
      <SpecialityMenu/>
      <TopDoctors/>
      <Banners/>
    </div>
  )
}
