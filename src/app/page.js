"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';


const Home = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(res => setData(res.data))
  },[])
  return (
    <div className='grid grid-cols-3 text-center gap-4 p-4'>
      {data.map(data => {
        const {userId,id,title,completed} = data;
        return <div className='card' key={id}>
          <h1>{id}</h1>
          <h3>{title}</h3>
          {
            completed === true ? <p className='text-green-500 font-semibold'>Completed</p> :
            <p className='text-red-500 font-semibold'>Not Finished</p>
          }
        </div>
      })}
    </div>
  )
}

export default Home;
