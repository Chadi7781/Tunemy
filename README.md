# Tunemy

CREATE FOLDER and sub folders : mkdir redux redux/actions redux/reducers
getInitialPropsallows the page to wait for data before rendering starts.
Using getInitialProps will make the page opt-in to on-demand server-side rendering.

### Button design

    <a href ="#">Get Started</a>
    Now on to adding classes to the class attribute. On mobile our button will be full-width otherwise, it will have some sane spacing defaults. The content is centered vertically as well as horizontally.
        #### flex sm:inline-flex justify-center items-center px-5 py-2

### Previous style .css (required)

body {
background-color: #e9ebee;
}

.square {
border-radius: 0px;
}

.jumbotron {
background-image: linear-gradient(to right, #007bff, #000);
color: white;
height: 50vh;
margin-top: 8vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 4rem;
}

.help-img {
position: absolute;
right: 0;
margin: auto;
width: 120px;
height: 120px;
object-fit: cover;
padding-right: 20px;
padding: 5px;
}
@media screen and (max-width: 768px) {
.help-img {
visibility: hidden;
transition: 0.5s;
}
}

.signin-btn {
display: flex;
justify-content: center;
align-items: center;

background-color: #0073b1;
padding: 10px;
height: 46px;
width: 100%;

border-radius: 28px;
border: none;
box-shadow: encart 0 0 0 1px rgb(0 0 0 / 60%),
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
vertical-align: middle;
z-index: 0;
transition-duration: 167ms;

font-size: 20px;
color: #fff;
}

.signin-btn:hover {
background-color: #1184c3;
cursor: pointer;
}

.content {
background-color: #fff;
padding: 35px 30px;
width: 100%;
height: 500px;

border-radius: 5px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

@media (max-width: 768px) {
padding: 25px 30px;
margin-left: 0;
margin-bottom: 15px;
border-radius: 25px;

    button {
      width: 100%;
    }

}
}

.floating-form {
position: relative;
}
.floating-form .form-control {
background: transparent;
position: relative;
z-index: 50;
}
.floating-form .form-control:focus,
.floating-form .form-control:active,
.floating-form .form-control:valid {
outline: none !important;
box-shadow: none !important;
}
.floating-form .form-control:focus + label,
.floating-form .form-control:active + label,
.floating-form .form-control:valid + label {
transform: translateY(-40%);
top: -2px;
z-index: 100;
font-size: 12px;
}
.floating-form label {
position: absolute;
top: 50%;
/_ bootstrap > input > padding size _/
left: 0.75rem;
z-index: 1;
font-size: 14px;
transform: translateY(-50%);
transition: all 0.3s;
background: #fff;
color: #afafaf;
}
.floating-form textarea + label {
top: 1.275rem;
}

/_Title REgister form _/
.title {
font-size: 35px;
padding: 10px 0;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
width: 100%;
top: 0;
background-color:green;

    position: absolute;
    font-family: "Roboto Thin";

    text-align: center;

}
}

.title h3 {
font-size: 30px;
text-align: center;
font-weight: 600;
width: 100%;
margin: auto;

padding: 10px 12px;
}

.google-btn {
margin-top: 2px;

display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border: 1px solid rgba(0, 0, 0, 0.6);
height: 46px;
width: 100%;
border-radius: 28px;
box-shadow: encart 0 0 0 1px rgb(0 0 0 / 60%),
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
}

.google-btn:hover {
background-color: rgba(207, 207, 207, 0.25);
color: rgba(0, 0, 0, 0.75);
}

.signin-link span {
font-weight: 600;
color: black;
cursor: pointer;
padding: 15px;
font-size: 15px;
text-align: center;
margin-bottom: 15px;

display: flex;
align-items: center;
justify-content: center;
}

.signin-link span button {
border: none;
background: none;
}

/_.divider {
border-bottom: 1px solid gray;
display: flex;
justify-content: center;
align-items: center;
}
_/
.divider span {
text-align: center;
font-size: 25px;
}

.title-signin {
display: flex;
flex-direction: column;
text-align: left;
font-size: 12px;
line-height: 1.333;
}

.separator {
width: 100%;
border-bottom: solid 1px;
position: relative;
margin: 30px 0px;
}

.separator::before {
content: "OR";
position: absolute;
left: 47%;
top: -8px;
background-color: #fff;
padding: 0px 10px;
}

### Previous home

    {/* <main class="px-4 sm:px-6 lg:px-8 z-10 ">
        <h2 class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl"></h2>
        {/* <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}{" "}
        <TitleAnimated />
        <TextAnimated />
        <ButtonAnimated />
        <div className=" overflow-y-hidden ">
          <div className="mx-auto container py-12 px-4">
            <div className="w-full flex justify-center">
              <div className="sm:text-center lg:text-left">
                <ImageAnimated />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-100 overflow-y-hidden">
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div
              className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-white-500
                    rounded-md
                    to-white-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16"
            >
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1
                        role="heading"
                        className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-black font-black leading-6 lg:leading-10 md:text-left text-center"
                      >
                        Become a member and start building the next big thing
                      </h1>
                    </div>
                    <button
                      role="button"
                      aria-label="Join the community"
                      className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-gray-200 font-bold  text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-indigo focus:outline-none"
                    >
                      Join the community
                    </button>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                      alt="cartoon avatars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-56 md:mt-56 pb-20 p-24 relative bg-blueGray-100">
        <AvailableCourses />
      </section>

//NEW NAVBAR
import Image from 'next/image'
import React from 'react'
import Button from '../../util/ui/widgets/Button'
import Links from './NavItem'

function Nav() {
return (
<section class="header_area">
<div class="navbar-area bg-red-600">
<div class="container relative">
<div class="row items-center">
<div class="w-full">
<nav class="flex items-center justify-between bg-red-600 py-4 navbar navbar-expand-lg">
<a class="navbar-brand mr-5" href="index.html">
<img src="assets/images/logo.svg" alt="Logo"/>
</a>
<button class="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
<span class="toggler-icon"></span>
<span class="toggler-icon"></span>
<span class="toggler-icon"></span>
</button>

                        <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                            <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll active" href="#home">Home</a>
                                </li>
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll" href="#about">About</a>
                                </li>
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll" href="#services">Services</a>
                                </li>
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll" href="#work">Projects</a>
                                </li>
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll" href="#pricing">Pricing</a>
                                </li>
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll" href="#blog">Blog</a>
                                </li>
                                <li class="nav-item ml-5 lg:ml-11">
                                    <a class="page-scroll" href="#contact">Contact</a>
                                </li>
                            </ul>

                       </div>
                       </nav>
                </div>
                </div>
                </div>
    </div>

    <div id="home" class="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
        <div class="hero_shape shape_1">
            <img src="assets/images/shape/shape-1.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_2">
            <img src="assets/images/shape/shape-2.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_3">
            <img src="assets/images/shape/shape-3.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_4">
            <img src="assets/images/shape/shape-4.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_6">
            <img src="assets/images/shape/shape-1.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_7">
            <img src="assets/images/shape/shape-4.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_8">
            <img src="assets/images/shape/shape-3.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_9">
            <img src="assets/images/shape/shape-2.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_10">
            <img src="assets/images/shape/shape-4.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_11">
            <img src="assets/images/shape/shape-1.svg" alt="shape"/>
        </div>{""}
        <div class="hero_shape shape_12">
            <img src="assets/images/shape/shape-2.svg" alt="shape"/>
        </div>{""}

        <div class="container">
            <div class="row">
                <div class="w-full lg:w-1/2">
                    <div class="header_hero_content pt-150 lg:pt-0">
                        <h2 class="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Creative Multipurpose Tailwind CSS <span class="text-theme-color">Template</span></h2>
                        <p class="mt-8 lg:mr-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                        <div class="hero_btn mt-10">
                            <a class="main-btn" href="#0">Get Started</a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        <div class="header_shape hidden lg:block"></div>

        <div class="header_image flex items-center">
            <div class="image 2xl:pl-25">
                <img src="assets/images/header-image.svg" alt="Header Image"/>
            </div></div></div>

</section>

)
}

export default Nav
#   T u n e m y  
 