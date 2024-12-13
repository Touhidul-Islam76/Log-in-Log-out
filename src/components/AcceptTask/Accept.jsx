import React from 'react'

const Accept = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className='h-[280px] w-[300px] bg-yellow-400 rounded-xl py-3 px-5 flex-shrink-0'>
            <div className='flex justify-between items-center'>
            <div className='font-bold rounded-lg bg-red-600 text-white text-sm py-3 px-5'>{data.category}</div>
            <div className='text-xl text-italic text-white font-medium'>{data.date}</div>
            </div>
            <h1 className='text-2xl text-italic text-white font-medium mt-5 mb-2'>{data.title}</h1>
            <p className='text-white'>{data.description}</p>
            <div className='flex justify-between items-center mt-5 text-white'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded-lg'>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-lg'> Mark as Failed</button>
            </div>
        </div>
    </div>
  )
}

export default Accept
