import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './investor.css'
function Investor() {
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
    <div className='invest' >
    <div className='row'>
      <h1 className='mx-auto  text-center text-black mb-4 mt-2'>Investor signup</h1>
       <div className=' col-11 col-sm-10 col-md-6 col-lg-6 border justify-content-center mx-auto '>
        <form onSubmit={handleSubmit(submitform)} className='form mx-3 my-3 mt-5 mb-5'>
           {/*first name */}
           <label className='mt-2 mb-1 fw-bold'>Name</label>
             <input
             type='text'
             name='Name'
             className='form-control'
             placeholder='your name'
             {...register('Name',{required:'True'})}
             
           /> 
           {errors.Name?.type==='required'&&<p className='text-danger'>* Name is required</p>}
             {/*username */}
             <label className='fw-bold'>Username</label>
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
             <label className='mt-2 mb-1 fw-bold'>email</label>
             <input
             type='text'
             name='email'
             className='form-control'
             placeholder='abc@gmail.com'
             {...register('email',{required:'True'})}
             
           /> 
           {errors.email?.type==='required'&&<p className='text-danger'>* email is required</p>}
            {/*phone no*/}
            <label className='mt-2 mb-1 fw-bold'>phone no</label>
             <input
             type='tel'
             name='phone'
             className='form-control'
             placeholder='xxxxxxxxxx'
             pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
             {...register('tel',{required:'True'})}
             
           />
           
              {/*password */}
              <label className='mt-2 mb-1 fw-bold'>password</label>
             <input
             type='password'
             name='password'
             className='form-control'
             placeholder='password'
             {...register('password',{required:'True',minLength:'4'})}
             
           /> 
           {errors.password?.type==='required'&&<p className='text-danger'>* password is required</p>}
            
            {/* confirm password */}
            <label className='mt-2 mb-1 fw-bold'>Confirm password</label>
             <input
             type='confirm password'
             name=' confirmpassword'
             className='form-control'
             placeholder='confirm password'
             {...register('confirm password',{required:'True',minLength:'4'})}
             
           /> 
           {errors.confirmpassword?.type==='required'&&<p className='text-danger'>* password is required</p>}
            
            {/*linkdin*/}
            <label className='mt-2 mb-1 fw-bold'>linkdin</label>
             <input
             type='url'
             name='company'
             className='form-control'
             placeholder=' linkdin profile link'
             {...register('url',{required:'True'})}
             
           /> 
           {errors.url?.type==='required'&&<p className='text-danger'>*link is required</p>}
            {/*company*/}
            <label className='mt-2 mb-1 fw-bold'>company</label>
             <input
             type='text'
             name='company'
             className='form-control'
             placeholder= 'company name'
             {...register('company',{required:'True'})}
             
           /> 
           {errors.company?.type==='required'&&<p className='text-danger'>*link is required</p>}
            {/*percapita income*/}
            <label className='mt-2 mb-1 fw-bold'>per capita income</label>
             <input
             type='digit'
             name='income'
             className='form-control'
             placeholder= 'income'
             {...register('income',{required:'True'})}
             
           /> 
           {errors.income?.type==='required'&&<p className='text-danger'>*link is required</p>}
           <button className='btn btn-success mt-4' onClick={goHome} onSubmit={handleSubmit(submitform)}>SUBMIT</button>
        </form>
       
       </div>
      </div> 
     
  </div>
  )
}

export default Investor;