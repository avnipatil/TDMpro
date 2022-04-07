import './Contact.css'
import React, {useRef} from 'react'
import { useForm } from "react-hook-form"
import Button from '../../Button/Button'
import Recaptcha from 'react-google-invisible-recaptcha';
import axios from "axios";
import Swal from "sweetalert2";
import contact from '../../../img/contactimg.png';
const Contact = ()=>{
    // Google Captcha 
    let recaptcha = useRef(null);
    const onResolveddata = () => {
        console.log("a" + recaptcha.current.getResponse());
    }
//Form POST API coding  
const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});

        const onSubmit = (data) =>{
            console.log(data);
            axios.post(`https://second-deploy.herokuapp.com/api/contact`,data)
            .then(res => { 
                console.log(res);
                console.log(res.data);
                alert('Added Sucessfull');
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
        <section className='contact-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 contact_bannner' data-aos="fade-right">
                        <h1 className='conban_txt'>Contact</h1>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 contact_noinfo' data-aos="fade-up">
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-4 px-3 py-3'>
                                <span className='contact_details'>                                   
                                    <div><a href="tel:+1 302-261-5312"><i className="fa fa-headphones"></i></a></div>
                                    <p>+1 302-261-5312</p>
                                    <span>Mon-Sat 9 to 6</span>
                                </span>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 px-3 py-3'>
                                <span className='contact_details'>                                   
                                    <div><a href="mailto:support@TDM.com"><i className="fa fa-envelope"></i></a></div>
                                    <p>support@TDM.com</p>
                                    <span>Free enquiry</span>
                                </span>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-4 px-3 py-3'>
                                <span className='contact_details'>                                   
                                    <div><i className="fa fa-map-marker"></i></div>
                                    <p>Pune India</p>
                                    <span>City Vista Down Town</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row contact_formrow'>
                    <div className='col-lg-12 col-md-12 col-sm-12 contform_box'>
                       <div className='col-lg-8'>
                        <div className='contant-form-innerclass'>
                        <h2 className='conformhead'>Contact Here</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6 my-2">
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
                                <div className="col-md-6 my-2">
                                    <div className="md-form mb-0">
                                        <input name="Business_Email_Address" type="email" className="form-control" placeholder='Your Email'
                                        {...register("Business_Email_Address",
                                        { required: true, maxLength: 30})}/>
                                         <div className='validtntxtdiv'>
                                            {errors.Business_Email_Address && "Please Enter email."}
                                                {errors?.Business_Email_Address?.type === "maxLength" && (
                                                <p >Email cannot exceed 30 characters</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 my-2">
                                    <div className="md-form mb-0">
                                        <input name='Phone_Number' type="number" className="form-control" placeholder="Your Phone"
                                          {...register("Phone_Number",
                                          { required: true, maxLength: 10})}/>
                                           <div className='validtntxtdiv'>
                                              {errors.Phone_Number && "Please Enter phone."}
                                                  {errors?.Phone_Number?.type === "maxLength" && (
                                                  <p >Phone cannot exceed 10 Number</p>
                                              )}
                                          </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="md-form mb-0">
                                        <input name='Subject' type="text" className="form-control" placeholder="Your Subject"
                                         {...register("Subject",
                                         { required: true, maxLength: 50})}/>
                                          <div className='validtntxtdiv'>
                                             {errors.Subject && "Please Enter subject."}
                                                 {errors?.Subject?.type === "maxLength" && (
                                                 <p >subject cannot exceed 50 characters</p>
                                             )}
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 my-2">
                                    <div className="md-form">
                                        <textarea name='Message'{...register("Message",{required:true})} type="text"  rows="2" className="form-control md-textarea" placeholder='Message'/>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4'><Button btnname="Send Your Response"/></div>
                                <Recaptcha 
                                     badge="bottomleft"
                                     ref={recaptcha}
                                     onChange={onResolveddata}
                                     onExpired={() => {
                                     recaptcha.current.reset();
                                     }}
                                     sitekey="6Lct3zkdAAAAAO0KFEeZ9r7wmIfATa-qpOCp4F-T"
                                     Secret Key="6Lct3zkdAAAAAGQ4KCB3UKQ9qqOg7VvYPyLqkfbL"    
                                 />
                        </form>
                        </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='d-flex'>
                            <img src={contact} alt="" style={{"width":"300px", "height":"425px"}}></img>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* map section */}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 mb-4'>
                                <div className="map-responsive">
                                    <iframe title="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7394993560947!2d-75.55046518462441!3d39.74550207944884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd405e4bbbff%3A0xc691aa2997c08633!2s919%20N%20Market%20St%20%23950Wilmington%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sin!4v1625144357974!5m2!1sen!2sin" width="100%" height="400" frameBorder="0"
                                        style={{ border: '0' }} allowFullScreen alt="" ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}
export default Contact;