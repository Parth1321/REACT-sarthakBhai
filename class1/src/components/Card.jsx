import React from 'react'
import CardBottom from './CardBottom'

const Card = (props) => {
    
  return (
    <div className='m-7 bg-white h-[600px] inline-block w-[400px] rounded rounded-[20%] '>
        
        <img className='w-full h-2/3 object-cover object-top rounded  -[20%] ' src={props.img} alt="" />
        <CardBottom username={props.username} age={props.age} city={props.city} />

    </div>

  )
}

export default Card