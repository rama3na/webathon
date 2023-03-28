import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {AiFillLock} from 'react-icons/ai'
function Navbar() {
  return (
   <div className="navbar navbar-expand-sm bg-dark  " id="nav">
   <div className="container-fluid">
     <a href="#">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwuO4f7gBmQ908SdhLbxnwqtzW0Soxwma5D-SgeF0W_ldAtznrpi3qZ1w6z0JaS1536I&usqp=CAU" className='  border-rounded' width="50px" alt=""/>
     </a>
     <h5 className='text-white'>Enterprenur hub</h5>

     
     <button data-bs-target="#menu " data-bs-toggle="collapse" class="navbar-toggler">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse justify-content-end " id="menu">
     <ul className='nav   bg-dark'>
        <li className="nav-item ">
           <Link className='nav-link text-white' to="/">
            <button className='bg-dark text-white border-rounded' >{"  "} <AiFillHome/> Home</button>
           </Link>
        </li >
        <li className="nav-item ">
        <Link className='nav-link text-white' to="/Signup">
             enterprener signup
           </Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link text-white' to="/Signin">
             Login
           </Link>
        </li>
        <li className="nav-item ">
        <Link className='nav-link text-white' to="/Investor">
            <button className="bg-black text-white">{""}<AiFillLock/> Investor signup</button>
           </Link>
        </li>
        
       
         
    </ul>
     </div>
   </div>
 </div>
  );
}

export default Navbar;
