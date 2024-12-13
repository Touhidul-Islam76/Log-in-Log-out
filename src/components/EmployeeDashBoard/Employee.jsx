import React, { useEffect, useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import Accept from '../AcceptTask/Accept';
import Completed from '../CompletedTask/Completed';
import New from '../NewTask/New';
import Failed from '../FailedTask/Failed';


const Employee = (props) => {
   const logout = () => {
       localStorage.setItem('loggedInUser',"")
    //    window.location.reload()
       props.changeUser('')
   }
   
  return (
    <div>
      <div>
      <div className='container mx-auto mt-10 px-10 md:px-0'>
        <div>
            <h4 className='text-2xl text-white font-medium'>
                Hi,
            </h4>
            <h1 className='flex justify-between items-center'>
                <div className='text-5xl text-italic text-blue-600 font-medium'>{props.data.name}</div>
                <button onClick={logout} className='font-bold rounded-lg bg-red-400 text-white text-xl py-3 px-5'>Log Out</button>
                
            </h1>
            <br />
            <div className='mt-12 flex items-center justify-between gap-4 flex-wrap'>
                <div className='w-[320px] h-[200px] bg-red-400 rounded-lg mx-auto flex flex-col items-center justify-center'>
                    <div className=''>
                    <h1 className='text-2xl text-white font-medium'>{props.data.taskSummary.failed}</h1>
                    <h1 className='text-3xl text-italic text-white font-medium'>Failed Task</h1>
                    </div>
                </div>
                <div className='w-[320px] h-[200px] bg-blue-400 rounded-lg mx-auto flex flex-col items-center justify-center'>
                <div className=''>
                    <h1 className='text-2xl text-white font-medium'>{props.data.taskSummary.newTask}</h1>
                    <h1 className='text-3xl text-italic text-white font-medium'>New Task</h1>
                    </div>
                </div>
                <div className='w-[320px] h-[200px] bg-green-400 rounded-lg mx-auto flex flex-col items-center justify-center'>
                <div className=''>
                    <h1 className='text-2xl text-white font-medium'>{props.data.taskSummary.completed}</h1>
                    <h1 className='text-3xl text-italic text-white font-medium'>Completed Task</h1>
                    </div>
                </div>
                <div className='w-[320px] h-[200px] bg-yellow-400 rounded-lg mx-auto flex flex-col items-center justify-center'>
                <div className=''>
                    <h1 className='text-2xl text-white font-medium'>{props.data.taskSummary.active}</h1>
                    <h1 className='text-3xl text-italic text-white font-medium'>Accepted Task</h1>
                    </div>
                </div>
            </div>
            <div>
        <div>
            <h1 className='text-emerald-400 text-5xl text-italic font-bold mt-10 md:hidden'>Swipe Task List<FaArrowCircleRight/> </h1>
        </div>
      <div className='mt-10  w-full overflow-x-auto py-5 flex items-center justify-start gap-4 flex-nowrap'>
        {props.data.tasks.map( (task , index) => {
            // console.log(task)
            if(task.active === true){
                return <Accept data={task} key={index}/>
            }
            
            if(task.failed === true){
                return <Failed data={task} key={index}/>
            }           
           
        }
        )}
        {props.data.tasks.map( (task , index) => {
            if(task.newTask === true){
                return <New data={task} key={index}/>
            }
            if(task.completed === true){
                return <Completed data={task} key={index}/>
            }
        })}
        {/* <Failed data={data}/>

        <New data={data}/>

        <Completed data={data}/> */}
         
         {/* <Accept data={data}/> */}
        

       
      </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Employee
