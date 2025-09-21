import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'


export const AdminContext = createContext();
const AdminContextProvider = (props) => {


  //  const [aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.setItem('aToken'):'')
  const [aToken, setAToken] = useState(() => {
    return localStorage.getItem('aToken') || '';
  });
  const [doctor, setDoctor] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL


  const getAllDoctor = async () => {
    try {


      const { data } = await axios.post(backendUrl + '/api/admin/all-doctor', {}, { headers: { aToken } })
      if (data.success) {
        setDoctor(data.doctor)
        console.log(data.doctor)
      } else {

        toast.error(data.message)
      }



    } catch (error) {
      toast.error(error.message)

    }
  }

  const changeAvailability = async (docId) => {
    try {

      const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })

      if (data.success) {
        toast.success(data.message)
        getAllDoctor()
      }
      else {
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    aToken, setAToken,
    backendUrl, doctor, getAllDoctor, changeAvailability
  }
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}


export default AdminContextProvider