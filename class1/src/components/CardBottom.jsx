import React from 'react'

const CardBottom = (props) => {
  return (
    <div className='p-5 h-1/2'>
        <h1 className='text-center text-3xl font-bold my-3'>{props.username}</h1>
        <h2 className='text-center text-3xl font-bold my-3'>{props.age}</h2>
        <h3 className='text-center text-3xl font-bold my-3'>{props.city}</h3>
    </div>
  )
}

export default CardBottom