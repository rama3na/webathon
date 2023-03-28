import React from 'react'
import './home.css'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div> 
    <div id="image" className="carousel slide carousel-sm m-0 w-100" data-bs-ride="true"  >
        <div className="carousel-indicators">
            <button data-bs-target="#image" data-bs-slide-to="0" className="active bg-black"></button>
            <button data-bs-target="#image" data-bs-slide-to="1" className="bg-black"></button>
        </div>
      <div className="carousel-inner">

        <div className="carousel-item active" data-bs-intervel="1500">
           <img src="https://img-b.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" height="300px" alt="" class="d-block w-100 h- mx-auto"/>
           <div className="carousel-caption border border-dark caption shadow  pe-5 bg-white"  >
            <h1 className="text-black fw-bold">Unlock the power of yourpeople</h1>
            <p className="text-black">Udemy Business is trusted by 10.5K+ companies around the world. Find out what we can do for yours.</p>
           </div>
        </div>
        <div className="carousel-item" data-bs-intervel="1000">
            <img src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/7869fd17-9599-4a5e-9b03-4748a3dae016.jpg" alt=""  class="d-block w-100 mx-auto" />
            <div className="carousel-caption border border-dark shadow text-black bg-white me-5 caption">
                <h1>Learning that gets you</h1>
                <p>Skills for your present (and your future). Getstarted with us</p>
            </div>
    </div>
   </div>
   
     <button className="carousel-control-prev  " data-bs-slide="prev" data-bs-target="#image">
       <span className="carousel-control-prev-icon border bg-black rounded-circle "></span>
     </button>
     <button className="carousel-control-next " data-bs-slide="next" data-bs-target="#image">
        <span className="carousel-control-next-icon  border bg-black rounded-circle "></span>
      </button>
      
   </div>


   <div class="container mt-4">
    <div class="row">
    <div class="col-sm-4">
            <div class="card  rounded shadow ">
                <img src="https://startupstorymedia.com/wp-content/uploads/2021/04/logo.jpeg"  height="260px"   class="w-100 pic border" alt=""/>
                <div class="card-body">
                    <h3>startup story</h3>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-4">
         
            <div class="card  rounded shadow">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTlz_WCsOOJCiTr4--4bSJEdfeAvQxZj6JD4oqUJe6iBPpcymv18fW3czFNRTaQAJVEQ&usqp=CAU"    height="260px" class="w-100 pic" alt=""/>
                <div class="card-body">
                    <h3>Guidelines</h3>
                     <a href="/Guide">details</a>
                     
                </div>
            </div>
            
        </div>
        <div class="col-sm-4">
            <div class="card  rounded shadow">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRgK_CKrsjU-ZPXicK8QbdJWFUib0zeFuKI8TRkL3HgqUb_CLW1HqBCpiV3t1rSP8QiI&usqp=CAU"  height="260px"   class="w-100 pic" alt=""/>
                <div class="card-body">
                    <h3>Startup ideas</h3>
                    <a href="/Ideas">details</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container mt-4">
    <div class="row">
    <div class="col-sm-4">
            <div class="card  rounded shadow ">
                <img src="https://images.yourstory.com/cs/wordpress/2016/01/Tax_States_FeatureImage-011.png?fm=png&auto=format"   height="260px" class=" pic" alt=""/>
                <div class="card-body">
                    <h3>states and startups</h3>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card  rounded shadow">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lTg00xza0KqENp_Q4y558PJYSkYG332tF-DVHqqq7XzxMXPjKg3lewqcKB9lEb_Xi5Q&usqp=CAU"  height="260px"   class="w-100 pic" alt=""/>
                <div class="card-body">
                    <h3>Notifications</h3>
                    
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card  rounded shadow">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXcCF9qypGkuFC_dqeLj6bxoAA-AIw20tI--Qiz_RT7DhofCNG0AvgdU5KqelqSg3Hzw&usqp=CAU"  height="260px"   class="w-100 pic" alt=""/>
                <div class="card-body">
                    <h3>schemes</h3>
                     
                </div>
            </div>
        </div>
    </div>
</div>
 
 
   </div>
  );
}

export default Home;