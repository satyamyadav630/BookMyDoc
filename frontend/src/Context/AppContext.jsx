import { createContext, useEffect, useState } from "react";
// import { doctors } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();



const AppContextProvider = (props) => {
    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors] = useState([])

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData , setUserData] = useState(false)



    const getDoctorsData = async () => {
  try {
    const { data } = await axios.get(backendUrl + '/api/doctor/list', {
      headers: {
       token: localStorage.getItem("token")          //  add new
      }
    });
            if (data.success) {
                setDoctors(data.doctors)

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }


const loadUserProfileData = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` // ← sahi format
      }
    });

    if (data.success) {
      setUserData(data.userData);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};


    const value = { doctors, currencySymbol, token, setToken, backendUrl,userData,setUserData,loadUserProfileData };
    
    useEffect(() => {
        getDoctorsData()
    }, [])

    useEffect(()=>{
    if (token) {
        loadUserProfileData()

        
    }else{
        setUserData(false)
    }
    
    },[token])

    return (
        <AppContext.Provider value={value}>
            {props.children} {/* Now props is defined */}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
