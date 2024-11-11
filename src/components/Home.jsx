import React from "react";
import "./Home.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPaintBrush,
  FaMobileAlt,
} from "react-icons/fa";
import Image from "../assets/images/update_banner.jpg";
import Info from "./Info";
import Nav from "./Nav";
import "../App.css";
import About from "../assets/images/profile.jpeg";
import Resume from "../assets/images/Resume.jpg";
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Gajapathi-CV.jpg";
    link.click();
  };
  return (
    <>
      <div className="banner-image image-container">
        <img src={Image} className="banner_img" alt="" />
      </div>
      <div className="container mt-2">
        <Info />
        <div className="custom_card_1 mb-4">
          <div className="row">
            <Nav />
            <div className="col-md-10">
              <div className="card mt-5 mb-4">
                <div
                  className="card-body"
                  style={{ border: "  1px solid rgb(255 255 255 / 8%)" }}
                >
                  <div className="row mt-5">
                    <div className="col-lg-5  ">
                      <div className=" d-flex justify-content-center">
                        <img src={About} className="about_img rounded" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-7  mt-2">
                      <div className="custom_title ">
                        <span>VISIT MY PORTFOLIO</span>
                        ABOUT ME
                      </div>
                      <div className="para  mt-4">
                        I have extensive experience with expert-level knowledge
                        of hand-coded HTML, CSS, Bootstrap, Tailwind CSS,
                        JavaScript, jQuery, and React JS. My hands-on approach
                        allows me to develop highly efficient, scalable, and
                        responsive web applications that are optimized for
                        performance and usability. I excel in transforming
                        complex design specifications into clean, maintainable
                        code.
                      </div>

                      <div className="ul">
                        <h5>
                          {" "}
                          <span className="me-3">
                            {" "}
                            <FaArrowRight style={{ color: "#ff014f" }} />{" "}
                          </span>
                          Web Design Frontend Developer
                        </h5>
                        <h5>
                          <span className="me-3">
                            {" "}
                            <FaArrowRight style={{ color: "#ff014f" }} />
                          </span>
                          Responsive & Mobile-First Design
                        </h5>
                        <h5>
                          <span className="me-3">
                            {" "}
                            <FaArrowRight style={{ color: "#ff014f" }} />
                          </span>{" "}
                          React & Modern Frontend Libraries
                        </h5>
                      </div>
                      <div className="btn">
                        <button onClick={handleDownload}>DOWNLOAD MY CV</button>
                      </div>
                    </div>

                    <div className="do">
                      <h5>What I am Doing</h5>
                      <div className="row justify-content-center">
                        <div className="col-md-6">
                          <div className="do_info">
                            <FaReact className="react-icon" />
                            <h5>Frontend Development</h5>
                            <p>
                              As a frontend developer with over a year of
                              experience, I specialize in building responsive
                              and interactive user interfaces using React. My
                              expertise includes integrating external libraries
                              like Owl Carousel, along with a strong proficiency
                              in HTML, CSS, and Bootstrap for crafting visually
                              appealing layouts. I am skilled in JavaScript for
                              dynamic content and functionality, and I utilize
                              jQuery for enhanced user interactions and
                              animations. My focus is on creating seamless and
                              engaging experiences that meet user needs and
                              business objectives.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="do_info mb-5">
                            <FaMobileAlt className="react-icon" />
                            <h5>Responsive</h5>
                            <p>
                              In today's digital landscape, responsive design is
                              essential for capturing user attention. I
                              specialize in building interfaces that adapt
                              gracefully to different screen sizes, ensuring a
                              consistent and enjoyable experience whether users
                              are on mobile, tablet, or desktop devices. With a
                              keen eye for detail, I develop responsive web
                              applications that not only look great but also
                              perform well. My goal is to create solutions that
                              enhance user interaction while meeting business
                              objectives through innovative design and
                              technology integration.
                            </p>
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
            <p className="text-center footer mt-5 mb-5">
              © 2024. All rights reserved by Gajapathi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
