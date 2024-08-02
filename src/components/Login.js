import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { setData } from '../slices/passChange'

const Login = () => {
    const [formdata,setformdata]=useState({email:"",password:""})
    const navigate=useNavigate()
    const despatch=useDispatch()

    const handlechanges=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const Login=async()=>{
      
        try{
         
         const user=await axios.get(`http://localhost:7093/users?email=${formdata.email}&password=${formdata.password}`);
         console.log(user.data,"user")
         let validate=user.data.find((e)=>{
            return (e.email==formdata.email) && (e.password==formdata.password)
         })
         console.log(validate,"ss")
         if(validate)
         {
            navigate('/dash')
            despatch(setData(validate))
            setformdata({email:"",password:""})
         }
         else{
            console.log("plz enter correct details")
         }
       
        
 
        }
        catch(error)
        {
         console.log(error,"something went wrong...")
        }
 
     }



  return (
    <div>
        <div>
            <label>email</label>
            <input name="email" value={formdata.email} type="text" onChange={handlechanges}></input>
        </div>
        <div>
            <label>password</label>
            <input name="password" value={formdata.password} type="text" onChange={handlechanges}></input>
        </div>
        <button onClick={()=>{Login()}}>Submit</button>
        <p><Link to="/sign">Plz signup</Link></p>
    </div>
  )
}

export default Login