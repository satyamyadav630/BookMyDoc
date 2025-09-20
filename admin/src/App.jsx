import React from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useContext } from 'react';
// import { AppContext } from './context/AppContext';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Admin/Dashboard';
import AllApointment from './Pages/Admin/AllApointment';
import AddDoctor from './Pages/Admin/AddDoctor';
import DoctorList from './Pages/Admin/DoctorList';



const App = () => {
  const {aToken} = useContext(AdminContext)

   return aToken ? (
    <div className='bg-[#F8F9FD]'>
    <ToastContainer/>
    <Navbar/>
    <div className='flex items-start'>
      <SideBar/>
{/* routes  */}
<Routes>

<Route path='/' element={<></>} />
<Route path='/admin-dashboard' element={<Dashboard/>} />
<Route path='/all-appointment' element={<AllApointment/>} />
<Route path='/add-doctor' element={<AddDoctor/>} />
<Route path='/doctor-list' element={<DoctorList/>} />


</Routes>

    </div>
    </div>
  ):(
    <>
     <Login/>
      <ToastContainer/>
    </>
  )

}

export default App