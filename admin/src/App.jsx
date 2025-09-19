import React from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useContext } from 'react';
// import { AppContext } from './context/AppContext';
import { AdminContext } from './context/AdminContext';



const App = () => {
  const {aToken} = useContext(AdminContext)

   return aToken ? (
    <div>
    <ToastContainer/>
    </div>
  ):(
    <>
     <Login/>
      <ToastContainer/>
    </>
  )

}

export default App