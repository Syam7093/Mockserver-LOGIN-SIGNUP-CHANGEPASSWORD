import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formdata,setformdata]=useState({name:"",email:"",password:""})

    const handleChange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }

    const singupdata=async()=>{
      
       try{
        const sendata={
            name:formdata.name,
            email:formdata.email,
            password:formdata.password
        }
        const user=await axios.post(`http://localhost:7093/users`,sendata);
        console.log(user,"user")
        setformdata({name:"",email:"",password:""})

       }
       catch(error)
       {
        console.log(error,"something went wrong...")
       }

    }


  return (
    <div>
        <div>
            <label>Name</label>
            <input name="name" value={formdata.name} type="text" onChange={handleChange}></input>
        </div>
        <div>
            <label>Email</label>
            <input name="email" value={formdata.email} type="text" onChange={handleChange}></input>
        </div>
        <div>
            <label>password</label>
            <input name="password" value={formdata.password} type="text" onChange={handleChange}></input>
        </div>

        <button onClick={()=>{
            singupdata()
        }}>Submit</button>
        <p><Link to="/">plz do login..</Link></p>
        
    </div>
  )
}

export default Signup