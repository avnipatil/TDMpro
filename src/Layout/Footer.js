import React,{useState} from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from "sweetalert2";
function Footer() {
    //Api data put
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data =>
    {
         console.log(data);
        axios.post(`https://second-deploy.herokuapp.com/api/unsubscriber`,data)
            .then(res => { 
                alert('Subscribe Sucessfull');
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
    //Link click open on top functionality
    const scrollgoTop = () => {
    window.scrollTo({ top: 0 , behavior: 'smooth' });
  };
  // footer scrollup icon show state & going to click scroll top
const [showScrollup, setShowScroll] = useState(false);
const checkingScrollTop = () => {
  if (!showScrollup && window.pageYOffset > 100) {
    setShowScroll(true)
  } else if (showScrollup && window.pageYOffset <= 100) {
    setShowScroll(false)
  }
};
window.addEventListener('scroll', checkingScrollTop)
// variable for copy-right to get system date function
const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
      <>
      <div className='section footer'>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-3 col-md-6 col-sm-6' style={{"textAlign":"initial",lineHeight:2}}>
                    <span className='d-flex align-items-start py-2 footer_logo'></span>
                    <div className='d-flex align-items-start mb-2'>
                        <p className='d-flex align-items-start  footer-p text-muted'>
                        The Decision Making is the source of the richest and informative white papers, research reports, case studies, and blogs published by global B2B corporations.
                        </p>
                    </div>
                  </div>
                <div className='col-lg-3 col-md-6 col-sm-6' style={{"textAlign":"initial",lineHeight:2}}>
                    <div className='Useful_Links mb-2'>
                        <ul> 
                        <h6>Useful Links</h6>  
                            <li className='d-flex align-items-start Useful_Links-li'>
                                <i className="fa fa-chevron-right text-muted pr-2"></i>
                                <Link to="/termsofservice" className="text-muted Link" onClick={scrollgoTop}>Terms Of Service</Link>
                            </li>
                            <li className='d-flex align-items-start '>
                                <i className="fa fa-chevron-right text-muted pr-2"></i>
                                <Link to="/privacypolicy" className="text-muted Link" onClick={scrollgoTop}>Privacy Policy</Link>
                            </li>
                            <li className='d-flex align-items-start '>
                                <i className="fa fa-chevron-right text-muted pr-2"></i>
                                <Link to="/unsubscribe" className="text-muted Link"  onClick={scrollgoTop}>Unsubscribe</Link>
                            </li>
                            <li className='d-flex align-items-start'>
                                <i className="fa fa-chevron-right text-muted pr-2"></i>
                                <Link to="/ccpa_law" className="text-muted Link" onClick={scrollgoTop}>California's CCPA Law</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'  style={{"textAlign":"initial",lineHeight:2}}>
                    <div className='Contact_us text-md-start mb-2'>
                        <h6>Contact Us</h6> 
                        <p className='text-muted text-md-start'>
                        <i className="fa fa-map-marker mx-1 d-inline"></i>
                             919 North Market Street, Suite<br></br> &nbsp;950 Wilmington, Delaware 19801.
                        </p>
                        <span className='text-muted'>
                        <i className="fa fa-envelope mx-1 d-inline"></i>
                            <a href="mailto:contact@thedecisionmaking.com" className='text-muted'>contact@thedecisionmaking.com</a>
                        </span>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'  style={{"textAlign":"initial",lineHeight:2}}>
                    <div className='Our_news mb-2'>
                        <h6>Our Newsletter</h6>
                        <p className='text-muted'>Subscribe to our newsletter to get latest updates.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputs">
                                <input type="email" {...register("Email_Address",{ required: true })} id="email" className="webform__form-control footer-subscribe" name="Email_Address" size="20" placeholder="Enter Your Email" autoComplete="off" style={{borderRadius:'0px'}} required/>
                                {errors.Email_Address &&<span></span>}
                                <input type="submit" name="submit" className="EWF__subscribe" value="SUBSCRIBE" style={{borderRadius:'0px'}}/>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
          </div>
      </div>
      <hr className='footer_hr'></hr>
      <div className="footer__bottom p-1">
            <div className="container">
                <div className="row">
                <div className="go_top" onClick={scrollgoTop}
                style={{visibility: showScrollup ? 'visible' : 'hidden' }} >
                <span className="fa fa-angle-up" onClick={checkingScrollTop()}></span>
                </div>
                   <div className='col-lg-6 col-md-6 '>
                        <div className="footer__bottom-content text-dark">
                          <p>Copyright &nbsp;<span>{getCurrentYear()}</span>&nbsp;<a href="https://thedecisionmaking.com/" className='bottom_copy_link' target="_blank">The Decision Making.</a> &nbsp; All rights reserved. Created by <a href="http://lead-tronics.com/" className='bottom_copy_link px-2' target="_blank"><strong>LeadTronics</strong></a></p>
                        </div>
                   </div>
                   <div className='col-lg-6 col-md-6'>
                        <div className='social_icon'>
                                <ul className="d-flex justify-content-end text-dark">
                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGttfmq6Wg32QAAAX737RHAMbQ_0kWR9Y-Gy5lIdyj--9toH0tdeRHOg6G-0wbIupLNM3mgcK2YmoHAl2XCL4WDyFk2mnqj34Woe9sW40RkhUYB_AbbUvChOatyW_EjNMEyCck=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fb2bnetworkservices%2F" target="_blank"><li className='px-2'><span className="fa fa-facebook-square"></span></li></a>
                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFf3KL2xIziZAAAAX735TnwPPJzFcVKAaVnT1_ygOWDKOVqrPBKFar6oqF83Fkq3BAy0-1IGXMTHARp2CPhanHXNJSyOzDpG9_tJl_-6AoGjzjOBpXrFB8oIjQIEFkaPNpeQEE=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fb2bnetworkservices%2F" target="_blank"><li className='px-2'><span className="fa fa-twitter"></span></li></a>
                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGSxPDkfK4pEgAAAX737aoYtApKBEuJzJiKBzWkOW0Y8ZTKcHf2dvaOMzwnLx_Cv75fyETUXA6fqg-XHRXn3gjLuDQr-0ajmUveW_iaYkl5ALZeVV1E6HaUbnWgWIDvCITdHxY=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fb2bnetworkservices%2F" target="_blank"><li className='px-2'><span className="fa fa-instagram"></span></li></a>
                                    <a href="https://www.linkedin.com/company/b2bnetworkservices/" target="_blank"><li className='px-2'><span className="fa fa-linkedin"></span></li></a>
                                </ul>
                        </div> 
                   </div>
                </div>
            </div>
           
        </div>      
      </>
  )  
}
export default Footer;
