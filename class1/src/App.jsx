import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      username:"Parth",
      age:24,
      city:"Bhopal",
      img:"https://i.pinimg.com/474x/cb/b0/aa/cbb0aa032168e344c3dc39546f5b7441.jpg"
    },
    {
      username:"Navneet",
      age:23,
      city:"Balaghat",
      img:"https://i.pinimg.com/236x/e2/7c/d2/e27cd2a613bc9288c6f546c8d08477bf.jpg"
    },
    {
      username:"Md",
      age:23,
      city:"Bihar",
      img:"https://i.pinimg.com/474x/53/69/a2/5369a2e3ea986cbedd33e2e83df22a64.jpg"
    },
    {
      username:"Shivi",
      age:24,
      city:"Bhopal",
      img:"https://i.pinimg.com/236x/81/0c/a0/810ca028722ed96f4b91b17ba9b05ec8.jpg"
    }
  ]

  return (
    <div className='p-5 bg-gray-300 min-h-screen w-full'>
     {users.map((elem)=>{
      return <Card username={elem.username} age={elem.age} city={elem.city} img={elem.img} />
     })}
    </div>
  )
}

export default App