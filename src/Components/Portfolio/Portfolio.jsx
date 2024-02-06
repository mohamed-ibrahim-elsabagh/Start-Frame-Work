import React, { useState } from 'react';
import style from './Portfolio.module.css';
import imgPort1 from '../../Assets/images/poert1.png';
import imgPort2 from '../../Assets/images/port2.png';
import imgPort3 from '../../Assets/images/port3.png';

export default function Portfolio() {
  const [enlargedImageVisible, setEnlargedImageVisible] = useState(false);

  const handlePortLay1Click = () => {
    setEnlargedImageVisible(!enlargedImageVisible);
  };

  return (
    <>
      <div className='d-flex justify-content-center align-content-center flex-column text-center mt-4'>
        <h3 className='text-center fs-2 fw-bolder'>Portfolio</h3>
        <i className="fa-solid fa-star"></i>
      </div>

      <div className="div">
        <div className={`container`}>
          <div className="row">
            <div className="col-md-4">
              <div className={`port-card py-4 position-relative`}>
                <img src={imgPort1} className={`img-fluid imgLay1  rounded-5 `}  alt="imgPort1" />
                <div className={`portLay1 rounded-5 ${style.portLay} position-absolute d-flex justify-content-center align-items-center `} onClick={handlePortLay1Click}>
                  <i className={`fa-solid fa-plus fs-1 iconSize ${style.iconSize}`}></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`port-card py-4 position-relative`}>
                <img src={imgPort1} className={`img-fluid imgLay1  rounded-5 `}  alt="imgPort1" />
                <div className={`portLay1 rounded-5 ${style.portLay} position-absolute d-flex justify-content-center align-items-center `} onClick={handlePortLay1Click}>
                  <i className={`fa-solid fa-plus fs-1 iconSize ${style.iconSize}`}></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`port-card py-4 position-relative`}>
                <img src={imgPort1} className={`img-fluid imgLay1  rounded-5 `}  alt="imgPort1" />
                <div className={`portLay1 rounded-5 ${style.portLay} position-absolute d-flex justify-content-center align-items-center `} onClick={handlePortLay1Click}>
                  <i className={`fa-solid fa-plus fs-1 iconSize ${style.iconSize}`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`port-card py-4 position-relative`}>
                <img src={imgPort1} className={`img-fluid imgLay1  rounded-5 `}  alt="imgPort1" />
                <div className={`portLay1 rounded-5 ${style.portLay} position-absolute d-flex justify-content-center align-items-center `} onClick={handlePortLay1Click}>
                  <i className={`fa-solid fa-plus fs-1 iconSize ${style.iconSize}`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`port-card py-4 position-relative`}>
                <img src={imgPort1} className={`img-fluid imgLay1  rounded-5 `}  alt="imgPort1" />
                <div className={`portLay1 rounded-5 ${style.portLay} position-absolute d-flex justify-content-center align-items-center `} onClick={handlePortLay1Click}>
                  <i className={`fa-solid fa-plus fs-1 iconSize ${style.iconSize}`}></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`port-card py-4 position-relative`}>
                <img src={imgPort1} className={`img-fluid imgLay1  rounded-5 `}  alt="imgPort1" />
                <div className={`portLay1 rounded-5 ${style.portLay} position-absolute d-flex justify-content-center align-items-center `} onClick={handlePortLay1Click}>
                  <i className={`fa-solid fa-plus fs-1 iconSize ${style.iconSize}`}></i>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      

      {enlargedImageVisible && (
        <div className={style.enlargedImageWrapper} onClick={handlePortLay1Click}>
          <img src={imgPort1} className={style.enlargedImage} alt="Enlarged" />
        </div>
      )}
    </>
  );
}
