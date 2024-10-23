    import React from 'react'
    import '../components/Home.css'
    import { FaFacebookF, FaInstagram, FaLinkedinIn,FaArrowRight, FaReact,FaNodeJs,FaPaintBrush,FaMobileAlt } from 'react-icons/fa';
    import Image from '../assets/images/new_banner.jpg'
    import Info from './Info';
    import Nav from './Nav';


    const Resume = () => {
    return (
        <>
            <div className="">
            <img src={Image} className='banner_img' alt="" />
        </div>
        <div className="container">
        <Info/>
        <div className="custom_card_1 mb-4">
            <div className="row">
                <Nav/>
                <div className="col-md-10">
                            <div className="     mt-5 mb-4">
                                <div className="card-body">
                                    <div className="row mt-5">
                                        <div className="col-lg-6 col-12">
                                            <div className="education">
                                            <p className='mx-4 text-center'>2017-2023</p> 
                                            <h4 className='mx-4 text-center'>Education Quality</h4>
                                            <div className="card edu_info">
                                                <div className="card-body d-flex justify-content-between px-3 py-3 P-2  ">
                                                    <div className="edu_details d-flex justify-content-between  ">
                                                        <div className='edu_left w-80'>
                                                            <h3>BE (COMPUTER SCIENCE ENGINEERING)</h3>
                                                            <p>ANNA UNIVERSITY</p>
                                                        </div>
                                                        <div className="edu_right my-5">
                                                            <p>2019-2023</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <p className='mt-1 px-3 py-3 lorem'>
                                                        During my Bachelor's degree in Computer Science Engineering, I gained comprehensive knowledge in core computer science concepts, programming languages, and software development. Key achievements include:
                                                        
                                                      <ul className='mt-3'>
                                                        <li className='mb-3'> Maintained a strong academic record with a CGPA of 8.1</li>
                                                        <li className='mb-3'>Specialized in web development, data structures, and algorithms</li>
                                                        <li className='mb-3'>Completed several hands-on projects using modern technologies</li>
                                                        <li className='mb-3'>Participated in technical workshops and coding competitions</li>
                                                        <li className='mb-3'>Developed strong problem-solving and analytical skills</li>
                                                        <li className='mb-3'>Active member of the college's coding club and technical society</li>
                                                     </ul>  
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card edu_info">
                                            <div className="card-body d-flex justify-content-between px-3 py-3">
                                                <div className="edu_details d-flex justify-content-between">
                                                    <div className='edu_left w-80'>
                                                        <h3>HSC</h3>
                                                        <p>GOVT.BOYS HIGHER SEC.SCHOOL,THIMIRI</p>
                                                    </div>
                                                    <div className="edu_right my-5">
                                                        <p className='mx-3'>2018-2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <p className='px-3 py-3 lorem'>
                                                    Completed Higher Secondary Certificate (HSC) with Computer Science group, achieving excellent academic performance. Key accomplishments include strong foundation in Mathematics, Physics, and Computer Science. Participated actively in school activities and maintained consistent academic records. Developed fundamental analytical and problem-solving skills that prepared me for higher education in engineering.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card edu_info">
                                        <div className="card-body d-flex justify-content-between px-3 py-3">
                                            <div className="edu_details d-flex justify-content-between">
                                                <div className='edu_left w-80'>
                                                    <h3>SSLC</h3>
                                                    <p>GOVT.BOYS HIGHER SEC.SCHOOL,THIMIRI</p>
                                                </div>
                                                <div className="edu_right my-5">
                                                    <p className='mx-3'>2016-2017</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <p className='px-3 py-3 lorem'>
                                                Successfully completed Sec`ondary School Leaving Certificate (SSLC) with excellent academic performance. Developed strong foundation in core subjects including Mathematics, Science, and English. Actively participated in various school activities and sports events. This fundamental education phase helped build critical thinking and analytical skills essential for higher studies.
                                            </p>
                                        </div>
                                    </div>
                                            </div>
                                            
                                        
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="education">
                                            <p className='mx-4 text-center'>2023 - PRESENT</p> 
                                            <h4 className='mx-4 text-center'>Work Exprience</h4>
                                            <div className="card edu_info">
                                                <div className="card-body d-flex justify-content-between px-3 py-3">
                                                    <div className="edu_details d-flex justify-content-between">
                                                        <div className='edu_left w-80'>
                                                        <h3>THAAGAM FOUNDATION</h3>
                                                        <p>WEB DEVELOPER</p>
                                                        </div>
                                                        <div className="edu_right my-5">
                                                            <p className='mx-2'>2023 - 2024</p>

                                                        </div>


                                                    </div>
                                                    </div>
                                                
                                                
                                                    <div>
                                                        <p className='px-3 py-3 lorem'>I  joined Thaagam Foundation a multinational non-governmental organization, in September 2023 as web developer. In this role, I work with HTML, CSS bootstrap, JavaScript, and Query to handle front-end development aiso oversee the daily operations of the organization, while actively contributing to web development projects My responsibilities include creating and updating various modules on the Thaagam Foundation website (www.thaagam.org)</p>
                                                    </div>
                                    
                                            
                                            </div>
                                            
                                         
                                            
                                            </div>
                                        
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                    <p className=' text-center'>Features</p>
                                    <h4 className=' text-center skill'>Design Skills</h4>
                                        <div className="col-lg-6 col-12">
                                            <div className='skill_left'>
                                          
                                            <div className='percentage mt-5'>
                                                <p className='mx-4'>React Js</p>
                                                <div class="progress">
                                                    <div class="bg-color_3"></div>
                                                    <span className='number_3'>75%</span>
                                                </div>

                                            </div>
                                            <div className='percentage mt-5'>
                                                <p className='mx-4'>HTML & CSS</p>
                                                <div class="progress">
                                                    <div class="bg-color_6"></div>
                                                    <span className='number_6'>85%</span>
                                                </div>

                                            </div>
                                            <div className='percentage mt-5'>
                                                <p className='mx-4'>BOOTSTRAP</p>
                                                <div class="progress">
                                                    <div class="bg-color_2"></div>
                                                    <span className='number_2'>85%</span>
                                                </div>

                                            </div>
                                            <div className='percentage mt-5'>
                                                <p className='mx-4'>TAILWIND CSS</p>
                                                <div class="progress">
                                                    <div class="bg-color_3"></div>
                                                    <span className='number_3'>75%</span>
                                                </div>

                                            </div>
                                            </div>



                                            
                                        </div>
                                        <div className="col-lg-6 col-12">
                                        <div className='percentage mt-5'>
                                                <p className='mx-4'>JAVASCRIPT</p>
                                                <div class="progress">
                                                    <div class="bg-color_5"></div>
                                                    <span className='number_5'>75%</span>
                                                </div>

                                            </div>
                                        <div className='percentage mt-5'>
                                                <p className='mx-4'>JQUERY</p>
                                                <div class="progress">
                                                    <div class="bg-color_5"></div>
                                                    <span className='number_5'>75%</span>
                                                </div>

                                            </div>
                                        <div className='percentage mt-5'>
                                                <p className='mx-4'>DJANGO</p>
                                                <div class="progress">
                                                    <div class="bg-color_7"></div>
                                                    <span className='number_7'>70%</span>
                                                </div>

                                            </div>
                                        <div className='percentage mt-5'>
                                                <p className='mx-4'>SQL</p>
                                                <div class="progress">
                                                    <div class="bg-color_7"></div>
                                                    <span className='number_7'>70%</span>
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

    export default Resume
