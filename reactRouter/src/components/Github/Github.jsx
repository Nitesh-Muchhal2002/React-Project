import React, { useEffect, useState }  from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //       fetch('https://api.github.com/users/Nitesh-Muchhal2002')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData()
    return (
        <div className='text-center m-4 bg-blue-300 text-black p-6 
        text-2xl '>Github Followers:{data.followers}<br/>
        Github Following:{data.following}
        <img className="" src={data.avatar_url} alt='Git picture' width={200} />
        
        </div>
    )
}

export default Github
export const githubInfo=async()=>
{
  const response=await  fetch
  ('https://api.github.com/users/Nitesh-Muchhal2002')
  return response.json()
}

