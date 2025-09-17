import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
// import Doctors from './Pages/Doctors'
import Login from './Pages/LOgin'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
// import { MyAppointment } from './Pages/MyAppointment'
import MyAppointment from './Pages/MyAppointment'

import Appointment from './Pages/Appointment'
import Navbar from './components/Navbar'
import AiRecommendationPage from './Pages/AiRecommendationPage'
import Footer from './components/Footer'
import Doctors from './Pages/Doctors'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
       <Route path='/my-appointment' element={<MyAppointment/>} />  
        <Route path='/appointment/:docId' element={<Appointment/>} />
        <Route path='/ai' element={<AiRecommendationPage/>}/>
 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App