import React from 'react'
import '../components/Home.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaArrowRight, FaReact,FaNodeJs } from 'react-icons/fa';
import Image from '../assets/images/new_banner.jpg'
import Info from './Info';
import Nav from './Nav';
import About from '../assets/images/profile.jpeg'
const Contact = () => {
  return (
    <>
    <div className="banner-image image-container">
    <img src={Image} className='banner_img' alt="" />
</div>
<div className="container">
<Info/>
<div className="custom_card_1 mb-4">
    <div className="row">
        <Nav/>
        <div className="col-md-10">
                    <div className="card mt-5 mb-4 ">
                        <div className="card-body">
                            <div className="row mt-5">  
                             <div className="col-lg-6">
                             <div className="card p-3 p-sm-5 contact mt-4 mb-5" style={{border:"  1px solid rgb(255 255 255 / 8%)"}}>
                             <div className="card-body mb-4">
                            <div className='d-flex justify-content-center'>
                             <img src={About} className='img' alt="" />
                             </div>

                             <div className='body_content  mx-3 mt-3'>
                             <h4 className='text-center'>K. GAJAPATHI</h4>
                            <p  className='text-center'>FRONTEND DEVELOPER</p>
                            <p className='w-100'>Experienced in building responsive, interactive user interfaces with React, HTML, CSS, Bootstrap, JavaScript, and jQuery. Over a year of experience in developing dynamic web applications that enhance user experience and meet business goals.</p>


                                <h6 className='contact_info'>Phone: <span> 9080122807</span></h6>
                                <h6 className='contact_info'>Email: <span>gajapathi787gmail.com </span></h6>

                                <p className='mt-5'>FIND WITH ME</p>
                                <div class="social"><div class="media d-flex justify-content-center align-items-center"><a href="https://www.naukri.com/mnjuser/profile?id=&altresid" class="text-white" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg></a></div><div class="media d-flex justify-content-center align-items-center"><a href="https://www.linkedin.com/in/k-gaja-pathi-b29a18271/" class="text-white" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a></div><div class="media d-flex justify-content-center align-items-center"><a href="#" class="text-white" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a></div></div>


                             </div>








                                </div>
                                </div>
                             </div>
                             <div className="col-lg-6">
                             <div className="card p-3 p-sm-4 contact mt-4 mb-5"  style={{border:"  1px solid rgb(255 255 255 / 8%)"}}>
                             <div className="card-body mb-4">
                                

                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <div className='input-grp mb-3'>
                                            <label htmlFor="">Name</label>
                                            <input type="text" class="w-100"/>

                                        </div>
                                        <div className='input-grp mb-3'>
                                            <label htmlFor="">Phone Number</label>
                                            <input type="number" class="w-100"/>

                                        </div>
                                        <div className='input-grp mb-3'>
                                            <label htmlFor="">Email</label>
                                            <input type="email" class="w-100"/>

                                        </div>
                                        <div className='input-grp mb-3'>
                                            <label htmlFor="">subject</label>
                                            <input type="text" class="w-100"/>

                                        </div>
                                        <div className='input-grp mb-3'>
                                            <label htmlFor="">Your Message</label>
                                            <textarea name="" id="" className='w-100'></textarea>

                                        </div>
                                        <div className='input-grp mb-3'>
                                            <button className='custom_btn  w-100 p-3 mt-4'>SEND MESSAGE   <span className='ms-2'>  <FaArrowRight style={{color:"#ff014f"}} /> </span></button>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">

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



    
    </div>
<div className="row ">
    <div className="col-md-12">
    <p className='text-center footer mt-5 mb-5'>© 2024. All rights reserved by Gajapathi.</p>

    </div>
</div>
</div>
</>
  )
}

export default Contact
