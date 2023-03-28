import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './signin.css'
function Signin() {
  let navigate=useNavigate()
  let goHome=()=>{
    navigate("/")
  }
  let{register,handleSubmit,formState:{errors}}=useForm()
  let [stateError,SetStateError]=useState("")
  let [data,setData]=useState([])
  let submitform=(userObj)=>{
    if(userObj.state=='DEFAULT')
    SetStateError("THIS FIELD IS REQUIRED");
    else{
      console.log(userObj);
    //make http request
    fetch("http://localhost:4000/users",{
      method:'POST',
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(userObj)
    })
    .then((res)=>res.json())
    .then((message)=>console.log(message))
    .catch((err)=>console.log("err is",err))
    setData(data=>[...data,userObj]) 
    }
  };
  
  return (
    <div className='sign1' >
    <div className='row'>
      <h1 className='mx-auto  text-center mb-4 mt-2 text-white'>Investor Login</h1>
       <div className=' col-11 col-sm-10 col-md-6 col-lg-6 border justify-content-center mx-auto '>
        <form onSubmit={handleSubmit(submitform)} className='form mx-3 my-3 mt-5 mb-5'>
             {/*username */}
             <label className=''>Username</label>
             <input
             type='text'
             name='username'
             className='form-control'
             placeholder='username'
             {...register('username',{required:'True',minLength:'4',maxLength:'16'})}
             
             />
             {errors.username?.type==='required'&&<p className='text-danger'>* username is required</p>}
             {errors.username?.type==='minLength'&&<p className='text-danger'>*min 4 char</p>}
             {errors.username?.type==='maxLength'&&<p className='text-danger'>* max 8 char</p>}
             {/*email */}
             <label className='mt-2 mb-1'>email</label>
             <input
             type='text'
             name='email'
             className='form-control'
             placeholder='abc@gmail.com'
             {...register('email',{required:'True'})}
             
           /> 
           {errors.email?.type==='required'&&<p className='text-danger'>* email is required</p>}
           
              {/*password */}
              <label className='mt-2 mb-1'>password</label>
             <input
             type='password'
             name='password'
             className='form-control'
             placeholder='password'
             {...register('password',{required:'True',minLength:'4'})}
             
           /> 
           {errors.password?.type==='required'&&<p className='text-danger'>* password is required</p>}
           {errors.username?.type==='minLength'&&<p className='text-danger'>*min 4 char</p>}
           <button className='btn btn-success mt-4' onClick={goHome} onSubmit={handleSubmit(submitform)}>SUBMIT</button>
        </form>
       
       </div>
      </div> 
     
  </div>
  )
}

export default Signin;