import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();



const AppContextProvider = (props) => {
    const currencySymbol='₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
 const [doctor,setDoctor] = useState([])


    const value = { doctors , currencySymbol };

    const getDoctorData = async () =>{
        try {
            const{data} =await axios.get(backendUrl + '/api/doctor/list')
            if(data.success){
                setDoctor(data.doctor)

            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log (error)
            toast.error(error.message)
            
        }
    }
    useEffect(()=>{
        getDoctorData()
    },[])

    return (
        <AppContext.Provider value={value}>
            {props.children} {/* Now props is defined */}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
