import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const { doctor, aToken, getAllDoctor } = useContext(AdminContext)


  useEffect(() => {

    if (aToken) {
      getAllDoctor()
    }
  }, [aToken])

  return (
    <div>
      <h1></h1>
      <div>
        {
          doctor.map((item, index) => (
            <div key={{ index }}>
              <img src={item.image} alt="" />
              <div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default DoctorList