import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email , setEmail] =useState('')
    const [password , setPassword] =useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Email is: ', email)
        console.log('Password is: ', password)
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='container mx-auto'>
      <div className='h-screen flex flex-col gap-6 items-center justify-center px-2 md:px-0'>
        <div className='border-2 rounded-xl border-blue-600 p-10 w-[320px] md:w-[600px] h-[400px] mx-auto login'>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl text-italic text-blue-600 font-bold mb-10'>Log In</h1>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" required className='outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' placeholder='Enter your email' />
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" required className='outline-none text-white mt-3 bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' placeholder='Enter your password' />
                <button className='text-white mt-7 bg-blue-600 text-xl py-3 px-5 rounded-full'>Log In</button>
            </form>
        </div>
        <table className='text-white border-white border-2 w-[300px]'>
        <thead>
            <tr>
                <th>Role</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Admin</td>
                <td>admin@example.com</td>
                <td>123</td>
            </tr>
            <tr>
                <td>Employee</td>
                <td>employee1@example.com</td>
                <td>123</td>
            </tr>
            <tr>
                <td>Employee</td>
                <td>employee2@example.com</td>
                <td>123</td>
            </tr>
            <tr>
                <td>Employee</td>
                <td>employee3@example.com</td>
                <td>123</td>
            </tr>
            <tr>
                <td>Employee</td>
                <td>employee4@example.com</td>
                <td>123</td>
            </tr>
            <tr>
                <td>Employee</td>
                <td>employee5@example.com</td>
                <td>123</td>
            </tr>
        </tbody>
    </table>
        
      </div>
      <div>
      </div>
    </div>
  )
}

export default Login
