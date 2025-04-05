import React from 'react'

const Counter = ({number , plus , title}) => {
  return (
    <div className='text-center'>
        <h5 className=' font-extrabold text-white text-[40px]  '><span>{number}</span>{plus && "+" }</h5>
        <p className=' text-white/70 font-medium   '>{title}</p>
    </div>
  )
}

export default Counter