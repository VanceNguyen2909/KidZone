import { Swiper } from 'swiper/react';
import './gallery.css'
function Gallery(){
  let menu = document.querySelector("#menu-bars");
  let navbar = document.querySelector(".navbar");



  let themeToggler = document.querySelector(".theme-toggler");
  let toggleBtn = document.querySelector(".toggle-btn");




  document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
    btn.onclick = () => {
      let color = btn.style.background;
      document.querySelector(":root").style.setProperty("--theme-color", color);
    };
  });


    return(
      <div className='gallerytbg'>
        <section class="gallery" id="gallery">
          <div>
            <h1 class="heading">our <span>gallery</span></h1>

            <div class="box-container">
              <div class="box">
                
                <h3 class="title">best events</h3>
              
                <img src="AboutUsImage\project13.jpg" alt="" />
              </div>

              {/* <div class="box">
                <img src="AboutUsImage\project4.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div> */}

              <div class="box">
                <img src="AboutUsImage\project15.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

              <div class="box">
                <img src="AboutUsImage\project23.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

              <div class="box">
                <img src="AboutUsImage\project24.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

              <div class="box">
                <img src="AboutUsImage\project2.jpg" alt="" />  
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

              {/* <div class="box">
                <img src="AboutUsImage\project4.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div> */}

              <div class="box">
                <img src="AboutUsImage\project16.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

              <div class="box">
                <img src="AboutUsImage\project17.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

              <div class="box">
                <img src="AboutUsImage\project1.jpg" alt="" />
                <h3 class="title">best events</h3>
                <div class="icons">
                  <a href="#" class="fas fa-heart"></a>
                  <a href="#" class="fas fa-share"></a>
                  <a href="#" class="fas fa-eye"></a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
      
    
    );
}
export default Gallery;