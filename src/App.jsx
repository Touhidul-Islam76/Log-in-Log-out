import './App.css'
import Login from '../src/components/LogIn/Login'
import Admin from './components/AdminDashBoard/Admin'
import Employee from './components/EmployeeDashBoard/Employee'
import { useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './components/LocalStorage/LocalStorage'
import TaskContext, { Task } from './components/TaskContext/TaskContext'


function App() {
  
  const [user , setUser] = useState();
  const [loggedUser , setLoggedUser] = useState();
  const data = useContext(Task)
  useEffect( ()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedUser(userData.data)
    }
  },[])
  // console.log(data)

  // useEffect( ()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  const handleLogin = (email , password) => {
    if( email === 'admin@example.com' && password === '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role : 'admin' }))
    }else if (data){
      const employee = data.employees.find( (employee)=> email === employee.email && password === employee.password)
      if(employee){
        setUser('employee')
        setLoggedUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role : 'employee', data : employee }))
      }
      
    }else{
      alert('User not found')
    }
  }

  return (
    <>
      {!user?  <Login handleLogin={handleLogin}/> : ''}
      {user === 'employee' &&  <Employee data={loggedUser} changeUser={setUser} />}
      {user === 'admin' && <Admin changeUser={setUser} />}
    </>
  )
}

export default App
