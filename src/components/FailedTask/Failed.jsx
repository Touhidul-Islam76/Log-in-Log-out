import React from 'react'

const Failed = ({data}) => {
  return (
    <div>
      <div className='h-[280px] w-[300px] bg-red-400 rounded-xl py-3 px-5 flex-shrink-0'>
            <div className='flex justify-between items-center'>
            <div className='font-bold rounded-lg bg-red-600 text-white text-sm py-3 px-5'>{data.category}</div>
            <div className='text-xl text-italic text-white font-medium'>{data.date}</div>
            </div>
            <h1 className='text-2xl text-italic text-white font-medium mt-5 mb-2'>{data.title}</h1>
            <p className='text-white'>{data.description}</p>
            <div className=' text-white mt-5 flex justify-center'>
            <button className='w-full bg-red-700 py-1 px-2 text-sm rounded-lg'>Failed</button>
        </div>
        </div>
    </div>
  )
}

export default Failed
