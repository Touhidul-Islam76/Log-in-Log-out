import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../LocalStorage/LocalStorage'

export const Task = createContext()


const TaskContext = ({ children }) => {
  // localStorage.clear()
    const [userData , setUserData]=useState()
    setLocalStorage()
    useEffect( ()=>{
        const { employees , admin } = getLocalStorage()
        setUserData ( {employees , admin} )
    },[])
  return (
    <div>
      <Task.Provider value={userData}>
      {children}
      </Task.Provider>
    </div>
  )
}

export default TaskContext
