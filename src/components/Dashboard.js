import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
const Dashboard = () => {
    const data=useSelector((state)=>state.reusableStore.data)

    const [email,setemail]=useState("")
    const [password,setpassword]=useState('')
    const [password1,setpassword1]=useState('')
    const [one,setone]=useState([])

    const getemail=async()=>{
        let datas=await axios.get(`http://localhost:7093/users?email=${email}`)
        console.log(datas.data,"janithsk")
        setone(datas.data)

    }

    const paswordchange=async()=>{
        one[0].password=password
        let some=await axios.patch(`http://localhost:7093/users/${one[0].id}`,one[0])
    }
    
  return (
    <div>
        <div>
             <button onClick={()=>{
               
            }}>changepassword</button> 
           <div>
            <label>Email</label>
            <input type="email" onChange={(e)=>{setemail(e.target.value)}}></input>
            <button onClick={()=>{
               getemail() 
            }}>submit</button>

            <div>
                <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
                <input type="text" onChange={(e)=>{setpassword1(e.target.value)}}></input>
                <button onClick={()=>{
                   paswordchange()
                }}>submit</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard