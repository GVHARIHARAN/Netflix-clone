import React from 'react'
import './netflix.css'
import { Button } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Net from '../src/netflix_logo.png'
import Retro from "../src/retro.png"
import Wen from "../src/wd.jpeg"
import Raid from "../src/raid.jpeg"
import Gbu from "../src/gbu.jpg"
import Vida from "../src/vidamuyachi.jpg"
import Thug from "../src/tl.png"
import Sq from "../src/sq.jpeg"
import Beast from "../src/beast.png"
import Dragon from "../src/dragon.png"
import Jg from "../src/jt.jpeg"
// import Down from"../src/downarrow.png"
import Right from "../src/rightarrow.jpeg"
import Smile from "../src/smile.jpg"
import Pop from "../src/pop.jpg"
import Down from "../src/downn.jpg"
import Tv from "../src/tvv.jpg"
import {
    Container,
    Row,
    Col,
    Card,


} from "react-bootstrap";
const netflix = () => {

    return (
        <>




            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className="header">
                <nav>
                    <div className="container-fluid">
                        <div className="row logor ">
                            <div className="col logoc ">
                                <img className='logonet' src={Net} height={50} width={150} />
                            </div>
                            <div className=" col logoc1 ">


                                <form action="">
                                    <button className=' navbtn1'>English <img src='' /> </button>
                                    <button className='navbtn '>Sign In </button>
                                </form>



                            </div>

                        </div>

                    </div>
                </nav>
                {/* content */}
                <div className="container-fluid text-light ">
                    <div className="row d-flex home">
                        <div className="col-12">
                            <h1 className='homeh1'>Unlimited movies,TV <br /> shows and more</h1>
                            <h5 className='homeh5'>Starts at ₹149. Cancel at any time.</h5>
                            <p className='homep'>Ready to watch ? Enter your Email to create or restart your membership.</p>
                            <form className='email-signup'>

                                <input type="email" className='hemail' placeholder='Email address' required />
                                <button className='hbtn'>Get started  </button>
                            </form>
                        </div>


                    </div>

                </div>
            </div>

            {/* treanding */}
            {/* <div className="container-fluid topcon">
                <h1 className='toph1'>Trending Now</h1>
                <div className=" row topr">
                    <div className="col topc mt-3">
                        <h1 className='imgte text-light' >1</h1>
                        <img src={Wen} alt="" className=' imgfre' />


                    </div>
                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >2</h1>
                        <img src={Gbu} alt="" className=' imgfre' />


                    </div>
                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >3</h1>
                        <img src={Raid} alt="" className=' imgfre' />


                    </div>
                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >4</h1>
                        <img src={Jg} alt="" className=' imgfre' />


                    </div>
                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >5</h1>
                        <img src={Retro} alt="" className=' imgfre' />


                    </div>
                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >6</h1>
                        <img src={Thug} alt="" className=' imgfre' />


                    </div>

                    <div className="col topc mt-3">
                        <h1 className='imgte text-light' >7</h1>
                        <img src={Beast} alt="" className=' imgfre' />


                    </div>

                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >8</h1>
                        <img src={Sq} alt="" className=' imgfre' />


                    </div>

                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >9</h1>
                        <img src={Vida} alt="" className=' imgfre' />


                    </div>

                    <div className="col  topc mt-3">
                        <h1 className='imgte text-light' >10</h1>
                        <img src={Dragon} alt="" className=' imgfre' />


                    </div>


                </div>
            </div> */}
            {/* scroll img */}
            {/* <div className="wrapper"   >
            <h1 className='textsy'> {'<'}</h1>
                <div className="silde"  >
                   
                    <img src={Vida} alt="" />
                    <img src={Jg} alt="" />
                    <img src={Gbu} alt="" />
                    <img src={Dragon} alt="" />
                    <img src={Raid} alt="" />
                    <img src={Sq} alt="" />
                    <img src={Retro} alt="" />
                    <img src={Beast} alt="" />
                    <img src={Wen} alt="" />
                    <img src={Dragon} alt="" />




                </div>
                <h1 className='textsy1'> {'>'}</h1>
            </div> */}

            <div className="features container-fluid ">
                <div className="row fea justify-content-lg-center">
                    <h1 className='mt-3 feah1 text-center'>More reasons to join</h1>
                    <div className=" feacol mt-3  col-8 col-md-7 col-lg-2">
                        <h4>Enjoy on your TV.</h4>
                        <p>Watch on smart TVs, Playstation, Xbox, Chormecast, Apple TV, Blu-ray player and more.</p>
                        <img src={Pop} className='imco' alt="" />


                    </div>
                    <div className=" feacol  mt-3  col-8 col-md-7  col-lg-2"  >
                        <h4>Download your shows to watch offline.</h4>

                        <p>Save your favourites easily and always have something to watch.</p>

                        <img src={Down} className='imco' alt="" />



                    </div>
                    <div className=" feacol  mt-3 col-8 col-md-7  col-lg-2">
                        <h4>Watch everywhere</h4>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>

                        <img src={Tv} className='imco' alt="" />


                    </div>
                    <div className=" feacol  mt-3 col-8 col-md-7 col-lg-2">
                        <h4>Create profiles for kids</h4>
                        <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>

                        <img src={Smile} className='imco' alt="" />



                    </div>
                </div>
            </div>


            {/* freq */}

            <div className="faq">
                <h2>Frequently Asked Questions</h2>

                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first" />
                        <label for='first'> What is Netflix ?</label>
                        <div className="content">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                <br />
                                <br />
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </li>

                </ul>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="second" />
                        <label for='second'>


                            How much does Netflix cost?
                        </label>
                        <div className="content">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                        </div>
                    </li>

                </ul>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="third" />
                        <label for='third'>Where can I watch ?</label>
                        <div className="content">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                <br />
                                <br />
                                You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </p>
                        </div>
                    </li>

                </ul>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="fouth" />
                        <label for='fouth'>How do I cancel ?</label>
                        <div className="content">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>

                </ul>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="five" />
                        <label for='five'> What can I watch on Netflix ?</label>
                        <div className="content">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </li>

                </ul>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="six" />
                        <label for='six'>Is Netflix good for kids ?</label>
                        <div className="content">
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                <br />
                                <br />
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>
                        </div>
                    </li>

                </ul>
                <small className='smal'>
                    Ready to watch ? Enter your Email to create or restart your membership.
                </small>


            </div>
            <div className=" container-fluid email-sig">
                
                <input type="email" className="footemail" required placeholder='Email address' />
                <button className="footbtn">Get Started</button>
                
            </div>
            <div className="foot ">
                <div className="row ">
                    <h4>Question? call <a href="">000-800-919-1743</a></h4>
                    <div className="col-sm-12 col-3 col">
                        <a href="">FAQ</a>
                        <a href="">Media Centre</a>
                        <a href="">Ways to Wacth</a>
                        <a href="">Cookie Preferences</a>
                        <a href="">Speed Test</a>

                    </div>
                    <div className="col-sm-12 col-3 col">
                        <a href="">Help Centre</a>
                        <a href="">Investor Relations</a>
                        <a href="">Terms of Use</a>
                        <a href="">Corporate Information</a>
                        <a href="">Legel Noties</a>
                    </div>
                    <div className="col-sm-12 col-3 col">
                        <a href="">Account</a>
                        <a href="">Jobs</a>
                        <a href="">Privacy</a>
                        <a href="">Contact Us</a>
                        <a href="">Only on Netflix</a>
                    </div>

                </div>
                <button className='fnavbtn1'>English  </button>
                <p>Netflix India</p>


            </div>

        </>

    )
}

export default netflix