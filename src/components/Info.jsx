import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaArrowRight, FaReact,FaNodeJs,FaBriefcase  } from 'react-icons/fa';
import Image from '../assets/images/profile.jpeg'
const Info = () => {
  return (
    <>
    
       <div className="card custom_card" style={{border:"  1px solid rgb(255 255 255 / 8%)"}}
    >
        <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row"style={{positon:"relative"}}>
                                <div className="col-md-6  ">
                                    <div className=' d-flex justify-content-center'>
                                    <img src={Image} className='banner_img_1' alt="" />
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6 col-md-12 d-flex justify-content-center custom_border">
                                  <div className='info mx-4'>
                                  <h3>K.GAJAPATHI</h3>
                                  <p>FrontEnd Developer</p>
                                  <div className='social'>
                                    
                                    <div className='media d-flex justify-content-center align-items-center'>
                                        <a href="https://www.naukri.com/mnjuser/profile" className='text-white' target="_blank" rel="noreferrer">
                                            <FaBriefcase className="icon" />
                                        </a>
                                    </div>
                                    <div className='media d-flex justify-content-center align-items-center'>
                                    <a href="https://www.linkedin.com/in/k-gaja-pathi-b29a18271/" className='text-white' target="_blank" rel="noreferrer">
                                    <FaLinkedinIn className="icon" /></a>
                                    </div>  
                                    <div className='media d-flex justify-content-center align-items-center'>
                                    <a href="#" className='text-white' target="_blank" rel="noreferrer">
                                    <FaFacebookF className="icon" /></a>
                                    </div>
                                  </div>
                                  </div>

                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className='address'>
                            <div className="address-content">
                              <div className="address-group">
                                <div className="address-item">
                                  <span>Email</span>
                                  <p>gajapathi787@gmail.com</p>
                                </div>
                                <div className="address-item">
                                  <span>BIRTHDAY</span>
                                  <p>29/06/2002</p>
                                </div>
                              </div>
                              <div className="address-group">
                                <div className="address-item">
                                  <span>PHONE</span>
                                  <p>9080122807</p>
                                </div>
                                <div className="address-item">
                                  <span>LOCATION</span>
                                  <p>Arakonam</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                    </div>

                </div>
            </div>

        
        </div>
      </div>
    </>
  )
}

export default Info
