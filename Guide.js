import React from 'react'
import './guide.css'
function Guide() {
  return (
     <div>
        <div class="guidelines">
        <div > 
            
                <div id="image" class="carousel slide carousel-sm m-0 w-100" data-bs-ride="true"  >
                    <div class="carousel-indicators">
                        <button data-bs-target="#image" data-bs-slide-to="0" class="active bg-black"></button>
                        <button data-bs-target="#image" data-bs-slide-to="1" class="bg-black"></button>
                    </div>
                  <div class="carousel-inner">
            
                    <div class="carousel-item active" data-bs-intervel="1500" >
                       <img src="https://img-b.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt="" class="d-block w-100 h- mx-auto"/>
                       <div class="carousel-caption border border-dark caption shadow  bg-white"   >
                        <h1 class="text-black fw-bold me-5 ">Unlock the power of your people</h1>
                        <p class="text-black">Udemy Business is trusted by 10.5K+ companies around the world. Find out what we can do for yours.</p>
                       </div>
                    </div>
                    <div class="carousel-item" data-bs-intervel="1000">
                        <img src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/7869fd17-9599-4a5e-9b03-4748a3dae016.jpg" alt=""  class="d-block w-100 mx-auto"/ >
                        <div class="carousel-caption border border-dark shadow text-black bg-white  caption">
                            <h1>Learning that gets you</h1>
                            <p>Skills for your present (and your future). Get started with us</p>
                        </div>
                </div>
               </div>
            
                 <button class="carousel-control-prev  " data-bs-slide="prev" data-bs-target="#image">
                   <span class="carousel-control-prev-icon border bg-black rounded-circle "></span>
                 </button>
                 <button class="carousel-control-next " data-bs-slide="next" data-bs-target="#image">
                    <span class="carousel-control-next-icon  border bg-black rounded-circle "></span>
                  </button>
                  
               
            </div>


            
           
            <div class="guide1 mt-5 ">
                <div class="d-flex  a mb-5">
            <a href=""> <img src="https://www.cloudways.com/blog/wp-content/uploads/How-to-start-a-startup-1.jpg" width="500px"alt=""/> </a>
             <a href=""><img src="https://www.feedough.com/wp-content/uploads/2017/11/STARTUP-MISTAKES-15-1.png" width="500px" alt=""/></a>
             </div>
             <div class="d-flex justify-content-center a mb-5">
             <a href=""><img src="https://www.stoodnt.com/blog/wp-content/uploads/2019/03/Startup-vs-Corporates.png" width="500px" alt=""/></a>
             <a href=""><img src="https://www.cloudways.com/blog/wp-content/uploads/Get-Startup-Funding-FB-Banner.jpg" width="500px" alt=""/></a>
             </div>
             <a href=""><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJlVgXoaTVLX7RYORtmwKrZqMaaGdyiBKPA5ce5bipO3AzojZ7NgYmwxLrq0VovTNz34R25BMI0Jn4oGAqJNx1LZxu-cy2Uuya1h0mWXovZ7Ck9vFlJQ-ifKEDf14ytyJs1il1hH-Sm8OjYVR_BOXrk3u0JrAczaP5nKBN3_w-0gCGaxKUHG9WVr7J2Q/s1280/How%20to%20Pitch%20Your%20Startup%20Idea%20to%20Investors.jpg" 
            width="500px" class="b"alt=""/></a>
            </div>
</div>
     </div>
     </div>
  
  );
}

export default Guide;