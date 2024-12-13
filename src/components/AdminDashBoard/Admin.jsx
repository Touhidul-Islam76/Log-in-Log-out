import React, { useContext , useState } from 'react'
import { Task } from '../TaskContext/TaskContext'

const Admin = ({changeUser}) => {
    const logout = () => {
        localStorage.setItem('loggedInUser',"")
        // window.location.reload()
        changeUser('')
    }

    const employeeData = useContext(Task)

    const[title , setTitle] = useState('')
    const[description , setDescription] = useState('')
    const[date , setDate] = useState('')
    const [assignTo , setAssignTo] = useState('')
    const[category , setCategory] = useState('')
    const [sendTask , setSendTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setSendTask({title , description , date , assignTo , category , active : false , newTask : true , completed : false , failed : false})
        
        const data = employeeData.employees

        data.forEach( (employee) => {
            if(employee.name === assignTo){
                employee.tasks.push(sendTask)
                employee.taskSummary.newTask += 1
            }
        })
        localStorage.setItem('employees', JSON.stringify(data))
        console.log(data)
        setTitle('')
        setDescription('')
        setDate('')
        setAssignTo('')
        setCategory('')
    }

  return (
    <div>
       <div>
      <div className='container mx-auto mt-10 px-10 md:px-5 py-5'>
        <div>
        <h4 className='text-2xl text-white font-medium'>
                Hi,
            </h4>
            <h1 className='flex justify-between items-center'>
                <div className='text-5xl text-italic text-blue-600 font-medium'>Mark</div>
                <button onClick={logout} className='font-bold rounded-lg bg-red-400 text-white text-xl py-3 px-5'>Log Out</button>
            </h1>
            <br />
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-wrap mx-auto gap-3'>
                <div className='text-white w-[600px] mx-auto '>
                    <div>
                    <h1 className='text-2xl text-white font-medium mb-4'>
                        Task Title
                    </h1>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} className='w-[200px] md:w-full outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="text" placeholder='Make a UI Design'/>
                    </div>
                    <br />
                    <div className='block md:hidden '>
                    <h1 className='text-white text-2xl text-white font-medium mb-4'>
                        Description
                    </h1>
                    <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className='w-[200px] md:w-[500px] h-[150px] md:h-[365px] outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-lg placeholder:text-gray-400' name="" id=""></textarea>
                    </div>
                    <br />
                    <div >
                    <h1 className='text-2xl text-white font-medium mb-4'>
                        Date
                    </h1>
                    <input value={date} onChange={(e) => {setDate(e.target.value)}} type="date" className='w-[200px] md:w-full outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'/>
                    </div>
                    <br />
                    <div>
                    <h1 className='text-2xl text-white font-medium mb-4'>
                        Assign To
                    </h1>
                    <input value={assignTo} onChange={(e) => {setAssignTo(e.target.value)}} type="text" placeholder='Employee Name' className='w-[200px] md:w-full outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'/>
                    </div>
                    <br />
                    <div>
                    <h1 className='text-2xl text-white font-medium mb-4'>
                        Category
                    </h1>
                    <input value={category} onChange={(e) => {setCategory(e.target.value)}} type="text" placeholder='Design,Dev,etc.' className='w-[200px] md:w-full outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'/>
                    </div>
                    <br />
                    <div className='flex flex-col justify center items-center block md:hidden mb-8 md:mb-0'>
                    <button className='font-bold text-white mt-7 bg-blue-600 text-xl py-3 px-5 rounded-lg hover:bg-blue-500 transition ease-in duration-300'>
                        Create Task
                    </button>
                    </div>
                </div>
                <div className='mx-0 md:mx-auto hidden md:block flex flex-col items-center justify-center'>
                    <h1 className='text-white text-2xl text-white font-medium mb-4'>
                        Describtion
                    </h1>
                    <textarea className='w-[200px] md:w-[500px] h-[365px] outline-none text-white bg-transparent border-blue-600 border-2 text-xl py-3 px-5 rounded-lg placeholder:text-gray-400' name="" id=""></textarea>
                    <div className='flex mx-auto flex-col justify center items-center hidden md:block'>
                    <button className='w-full font-bold text-white mt-7 bg-blue-600 text-xl py-3 px-5 rounded-lg hover:bg-blue-500 transition ease-in duration-300'>
                        Create Task
                    </button>
                    </div>
                    </div>
            </form>

            
            <div className='bg-[#1c1c1c] p-5 rounded-lg overflow-y-auto '>
            <div className='bg-red-400 mb-2 py-2 px-4 text-white flex gap-2 justify-between rounded'>
                    <h2 className='w-1/5 text-center text-sm'>Name</h2>
                    <h4 className='w-1/5 text-center text-sm'>Completed Task</h4>
                    <h4 className='w-1/5 text-center text-sm'>Accepted Task</h4>
                    <h4 className='w-1/5 text-center text-sm'>New Task</h4>
                    <h4 className='w-1/5 text-center text-sm'>Failed Task</h4>
                    
                </div>
            <div className='p-5 rounded-lg h-48 overflow-y-auto scrollbar-hidden  '>                    
                {employeeData.employees.map((data,index) => {
                    return<div key ={index} className='bg-[#1c1c1c] mb-2 py-2 px-4 text-white overflow-y-auto  flex justify-between rounded'>
                    <h2 className='w-1/5 text-center text-purple-300'>{data.name}</h2>
                    <h4 className='w-1/5 text-center text-green-300'>{data.taskSummary.completed}</h4>
                    <h4 className='w-1/5 text-center text-yellow-300'>{data.taskSummary.active}</h4>
                    <h4 className='w-1/5 text-center text-blue-300'>{data.taskSummary.newTask}</h4>
                    <h4 className='w-1/5 text-center text-red-300'>{data.taskSummary.failed}</h4>
                    
                </div>
                })}
            </div>
                {/* <div className='bg-red-400 mb-2 py-2 px-4 text-white flex justify-between rounded'>
                    <h2>Employee</h2>
                    <h4>All Task</h4>
                    <h5>Status</h5>
                </div>

                <div className='bg-blue-400 mb-2 py-2 px-4 text-white flex justify-between rounded'>
                    <h2>Employee</h2>
                    <h4>All Task</h4>
                    <h5>Status</h5>
                </div>

                <div className='bg-yellow-400 mb-2 py-2 px-4 text-white flex justify-between rounded'>
                    <h2>Employee</h2>
                    <h4>All Task</h4>
                    <h5>Status</h5>
                </div>

                <div className='bg-purple-400 mb-2 py-2 px-4 text-white flex justify-between rounded'>
                    <h2>Employee</h2>
                    <h4>All Task</h4>
                    <h5>Status</h5>
                </div>

                <div className='bg-green-400 mb-2 py-2 px-4 text-white flex justify-between rounded'>
                    <h2>Employee</h2>
                    <h4>All Task</h4>
                    <h5>Status</h5>
                </div> */}
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Admin
