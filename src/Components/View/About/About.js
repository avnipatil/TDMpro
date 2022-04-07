import './About.css'
import React, { useState} from 'react';
import Button from '../../Button/Button'
import about_img from '../../../img/aboutimg.png'
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import { useForm } from "react-hook-form";
import axios from 'axios';
import aboutimg from '../../../img/about_img.png';
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab';
import Swal from "sweetalert2";
import f1 from '../../../img/About/features7.png';
import f2 from '../../../img/About/features5.png';
import f3 from '../../../img/About/f3.png';
import f4 from '../../../img/About/feature8.png';
import f5 from '../../../img/About/feature4.png';
import f6 from '../../../img/About/features3.png';
import f7 from '../../../img/About/f4.png';
const About = ()=>{
     //any where in the page scroll on top Navigation tab click open on top
     const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };
     // Model variable
     const [show, setShow] = useState(false);
     const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});
     //model Form POST API Code
     const onSubmit = (data) =>{
        axios.post(`https://second-deploy.herokuapp.com/api/subscription`,data)
         .then(res => { 
             alert('subscribe Sucessfull');
                        if(res.status === 200){
                            Swal.fire({
                                position:'centerd',
                                icon:'success',
                                title: 'Your Data has been saved',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
         }).catch(error => alert(error.message))
         reset();
         }

    return(
        <>
            <Modal show={show} centered >
                <Modal.Header>
                <Modal.Title className='whitemodel_ttitle' data-aos='fade-up'> No time to browse and check the topics of your interest?</Modal.Title>
                <span className="white_modalclosebtn" onClick={()=>setShow(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                </Modal.Header>
                <Modal.Body className='white_modelbody'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row' >
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                                <input name='Name' type="text" className="form-control" placeholder='Your Name'
                                    {...register("Name",
                                    { required: true, maxLength: 50})}
                                />
                                <div className='validtntxtdiv'>
                                    {errors.Name && "Please Enter name."}
                                    {errors?.Name?.type === "maxLength" && (
                                    <p >Name cannot exceed 50 characters</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                                <input name='Email_Address' type="email" className="form-control" placeholder='Your Company email'
                                    {...register("Email_Address",
                                    { required: true, maxLength: 50})}
                                />
                                <div className='validtntxtdiv'>
                                    {errors.Email_Address && "Please Enter email."}
                                    {errors?.Email_Address?.type === "maxLength" && (
                                    <p >email cannot exceed 50 characters</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                                <input name='Phone_Number' type="number" className="form-control" placeholder='Your Phone'
                                    {...register("Phone_Number",
                                    { required: true, maxLength: 10})}
                                />
                                <div className='validtntxtdiv'>
                                    {errors.Phone_Number && "Please Enter phone."}
                                    {errors?.Phone_Number?.type === "maxLength" && (
                                    <p >phone cannot exceed 10 characters</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                                <div className="form-group" style={{marginBottom:'2px'}}>
                                    <select name='Country' id="inputState" className="form-control" 
                                      {...register("Country",
                                      { required: true, maxLength: 10})}>
                                        <option selected>Select Country</option>
                                        <option value="1">India</option>
                                        <option value="2">United State</option>
                                        <option value="3">Other</option>
                                    </select>
                                    <div className='validtntxtdiv'>
                                        {errors.Country && "Please Enter country."}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                            <div className="form-group">
                                    <select name='Interest' id="inputState" className="form-control"
                                        {...register("Interest",
                                        { required: true, maxLength: 10})}>
                                        <option selected>Select Interest</option>
                                        <option value="1">CX</option>
                                        <option value="2">SalesTech</option>
                                        <option value="3">MarTech</option>
                                        <option value="3">DigiTech</option>
                                        <option value="3">FinTech</option>
                                        <option value="3">Supply Chain</option>
                                        <option value="3">VOIL</option>
                                        <option value="3">Cloud Tech</option>
                                        <option value="3">Electronics</option>
                                        <option value="3">IDM</option>
                                        <option value="3">Cyber Security</option>
                                    </select>
                                    <div className='validtntxtdiv'>
                                        {errors.interest && "Please Enter interest."}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='white_modelterms mx-2'>
                            <input type="checkbox" name="checkbox" style={{marginTop:'1%'}} {...register("checkbox",{required:true})}/>
                            <p className='px-2'>I would like to receive information on TDM events, and other communications via email from TDM. I can unsubscribe at any time.<Link to="/privacypolicy" onClick={scrollgoTop}>Privacy Policy</Link> And <Link to="/termsofservice" onClick={scrollgoTop}>Terms and Codition</Link></p>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-2'>
                            <Button btnname="Subscribed"/>
                            </div>
                    </div>
                    </form>
                </Modal.Body>
            </Modal>

            <section>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12 col-md-12 col-sm-12 about_bannner' data-aos="fade-right">
                            <h1 className='conban_txt'>About Us</h1>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 about_subscrb' data-aos="fade-left">
                            <div className='row'>
                                <div className='col-lg-8 col-md-8 col-sm-8'>
                                    <h6 className='subscibetxt' data-aos="fade-right">Subscribe Now & Stay Updated With The Topics Of Your Interest </h6>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4'>
                                   <div className='my-3'><Button btnname="Subscribed" function={ () => setShow(true)} /></div>             
                                </div>                       
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 my-5'>
                            <h4 className='abouttxt_head'>The Decision Making is designed to make the impact that matters.</h4>
                            <p className='aboutpara'>This is the largest free to access web tech library. A professional’s guide to technology resources. Browse this free online digital library for the latest technical white papers, blogs articles, e-books and many more. Stay informed with over infinite technical topics. With the plethora of free knowledge and resources available, business leaders and professionals can efficiently take the progressive decisions.</p>
                            <p className='aboutpara'>Our team has been growing exponentially in the past 1 year with both clients and our own in-house team. Due to our in-house expansion from 30 agents to 85 agents, we had decided to keep our top 15 partners to deliver for us. I'm glad to inform you that TDM has been the 7th best partner in 2019 and the #1 partner in 2020 in both volume and quality. Our conversion rates in SRL from partner media has gone up by 5% in 2020, and we are very grateful for your contribution. We would like to thank you personally for delivering all leads on time even when we request to front load leads beginning of the month, adding extra volume as we into the month reducing our internal slack. Hoping to grow this partnership with TDM throughout!</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 my-5'>
                            <img className='abouttxt_img' src={about_img} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="intro" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 col-md-12">
                            <div class="section-heading">
                            <p class="lead">We are creative digital marketing agency with expertise to grow any business that need proper guidance and a committed service.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                    <div class="col-lg-5 d-none d-lg-block col-sm-12 align-self-end">
                        <div class="intro-img">
                        <img src={aboutimg} alt="intro-img" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <div class="row">
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box text-center">
                            <span className='info-span'>01.</span>
                            <h4>Management</h4>
                            <p>we founded September with the goal of creating meaningful digital experiences that connect with people.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box text-center">
                            <span className='info-span'>02.</span>
                            <h4>Strategy</h4>
                            <p>We’re full service which means we’ve got you covered on design &amp; content right through to digital. </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box text-center">
                            <span className='info-span'>03.</span>
                            <h4>Experience</h4>
                            <p>You’ll form a lasting relationship with us, collaboration is central to we do.Digital experiences
                                connect people.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div class="intro-box text-center">
                            <span className='info-span'>04.</span>
                            <h4>Build</h4>
                            <p>Technology and design are the core of success for software related businesses. Leverage our years.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-lg-12">
                            <div class="intro-cta">
                            <p class="lead">Still have any question on mind ? <a href="/contact" class="smoth-scroll">Contact us</a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="features" class="features">
                    <div className='container'>
                        <div className='row'>
                            <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                            >
                            <Tab eventKey="home" title="Sales">

                            <div className="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-8 col-sm-6 order-2">
                                        <div className='feature-back'>
                                        <h3>Sales</h3>
                                        <p class="text-left">
                                            Soft Skills Every Salesperson Needs.You can’t be a skilled, well-rounded sales professional without adopting the soft skills necessary to improve the way you work.  Soft skills are non-technical skills that affect the way we approach and execute tasks.  They range from your people skills to personal management skills like time management, personal development, and self-motivation.
                                        </p>
                                        <p class="text-left">
                                            Having a difficult quarter? Struggling to get your company off the ground? If you can improve your sales, you can improve anything. This content is designed to help you get moving, get growing and stop stagnating. There is always something new to learn about becoming more efficient at closing sales. The thought-leaders on TYB are here to give you their wisdom, based on first-hand experience closing critical sales and growing their company.
                                        </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6 order-1 cl4-img">
                                        <img src={f1} alt="" class="img-fluid"/>
                                    </div>
                                </div>

                            </div>
                            </Tab>
                            <Tab eventKey="profile" title="Marketing">
                            <div className='col-lg-12'>
                                <div class="row">
                                    <div class="col-lg-8 col-sm-6">
                                        <div className='feature-back'>
                                        <h3>Marketing</h3>
                                        <p class="text-left">
                                            Marketing your business effectively will help you reach new customers, establish a brand identity and disrupt your market. You need to communicate a key set of value-propositions that make your products or services irresistible. The authors and contributors at TYB have experience marketing products that generate millions of dollars in revenue.
                                        </p>
                                        <h4>How to Make Your Online Marketing More Impactful</h4>
                                        <p class="text-left">
                                            Today competition and industrial rivalry have increased much more than before. Organizations are revising and restrategizing their existing marketing strategies to gain desired outcomes. Meanwhile, in this struggle, many retro options come into view.
                                        </p>
                                        <h4>Email Marketing</h4>
                                        <p  className='text-left'>In addition to the email marketing strategies that you use regularly, you might want to try some offbeat ones from time to time. They might enable you to boost your sales, increase customer satisfaction and get an additional competitive edge over your rivals</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6 cl4-img">
                                        <img src={f3} alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            </Tab>
                            <Tab eventKey="software" title="Software">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-lg-8 col-sm-6 order-2">
                                    <div className='feature-back'>
                                    <h3>Software</h3>
                                    <p class="text-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <p class="text-left">
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 order-1 cl4-img">
                                    <img src={f2} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            </div>
                            </Tab>
                            <Tab eventKey="Digital" title="Digital Marketing">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-lg-8 col-sm-6">
                                    <div className='feature-back'>
                                    <h3>Digital</h3>
                                    <p class="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    </p>
                                    <p class="text-left">
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 cl4-img">
                                    <img src={f4} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            </div>
                            </Tab>
                            <Tab eventKey="Graphics" title="Graphics">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-lg-8 col-sm-6 order-2">
                                    <div className='feature-back'>
                                    <h3>Graphics</h3>
                                    <p class="text-left">
                                        businesses need the services of graphic designers to create unique mobile apps and social media pages for business promotion. We can say that graphic design has become a part of doing business in physical and virtual markets.
                                    </p>
                                    <h4>Need graphic design for social media marketing</h4>
                                    <p class="text-left">
                                        Being a small business doesn’t mean that you can’t have great visual marketing graphics. But unless you’re a graphic designer, you might be intimidated by the thought of creating your own graphics for social media. The good news is that you don’t have to be a professional artist to get visually appealing graphics to market your small business.
                                    </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 order-1 cl4-img">
                                    <img src={f5} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            </div>
                            </Tab>
                            <Tab eventKey="HR" title="HR">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-lg-8 col-sm-6">
                                    <div className='feature-back'>
                                    <h3>HR Management</h3>
                                    <p class="text-left">
                                        Business management is part art and part science with a sprinkle of insanity. As a leader, you need to form the bedrock for your team. You do that by being consistent, reliable and available. These articles on TYB are designed to help you become a better leader everyday by feeding you a constant diet of business wisdom from people that have been there, done that and succeeded.
                                    </p>
                                    <p class="text-left">
                                        <h4>4 Ways to Inspire Employee Loyalty</h4>
                                        Employees are the lifeblood of a company. As a company owner, have you ever thought about how your employees feel about working for you? Do they actually enjoy their jobs, or do they see them as just a way to pay the bills? Your ability to motivate and engage your employees.
                                    </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 cl4-img">
                                    <img src={f6} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            </div>
                            </Tab>
                            <Tab eventKey="Web" title="Web">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-lg-8 col-sm-6 order-2">
                                    <div className='feature-back'>
                                    <h3>Web</h3>
                                    <p class="text-left">
                                    How to Protect Remote Workers in 2022
                                    The pandemic of 2020 has led to a vast number of workers being taken out of the regular office and being placed at home for work instead, distanced from their normal working conditions and what they are used to.
                                    </p>
                                    <p class="text-left">
                                   <h4 className='text-left'>Website Compliance: What You Need To Know For 2022</h4>
                                        New laws and regulations are ushering in a set of requirements that websites have to comply with to continue operating. These new regulatory guidelines have something to do with the accessibility, privacy, and security of websites and accounts which users create when they use them. 
                                    </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 cl4-img order-1">
                                    <img src={f7} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            </div>
                            </Tab>
                        </Tabs>
                            </div>
                        </div>
                    
            </section>
        </>
    )
}
export default About;