import React from 'react'

function Story({ img, username }) {
  return (
    <div className='max-w-[56px]'>
        <img className='h-14 min-w-[56px] rounded-full p-[1.5px] 
        border-red-500 border-2 object-cover cursor-pointer
        hover:scale-110 transition transform duration-200 ease-out' src={img} alt=""></img>
        <p className='text-xs w14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story