import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
   
    <div className="Footer-main">
      <div className={` text-light text-center py-4 mt-5 ${style.footerOneColor} `} >


            <div className="row">
              <div className="col-md-4 text-center text-white">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>


              </div>

              <div className="col-md-4 text-center text-white ">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex  justify-content-center align-items-center column-gap-3">
                  <span><i class="fa-brands fa-facebook fs-3"></i></span>
                  <span><i class="fa-brands fa-twitter fs-3"></i></span>
                  <span><i class="fa-brands fa-github fs-3"></i></span>
                  <span><i class="fa-solid fa-globe fs-3"></i></span>

                </div>
              </div>
              <div className="col-md-4 text-center text-white px-5">
                <h3>ABOUT FREELANCER</h3>

                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>

          </div>


        <div className={`  w-100 `}>
          <p className='text-center  w-100'>Copyright © Your Website 2021</p>
        </div>



      </div>

    </div>

    </>

}
