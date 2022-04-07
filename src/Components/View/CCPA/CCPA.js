import React from 'react'
import './CCPA.css';
import { useForm } from "react-hook-form";
import ccpa from '../../../img/footerpagesimg/ccpa-img.jpg';
import Button from '../../Button/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
function CCPA() {
    //Api Data Put
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data =>
    {
        axios.post(`https://second-deploy.herokuapp.com/api/CCPA`,data)
            .then(res => { 
                alert('Submit Sucessfull');
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
  return (
    <section className='ccpa-page'>
        <div className='container'>
            <div className='row mb-2 mt-2'>
                <div className='col-lg-4'>
                    <div className='ccpa-img'>
                        <img src={ccpa} alt="" className='ccpa-img-style'></img>
                    </div>
                </div>
                <div className="col-lg-8 ccpa-content-main">
                    <div className='text-center'>
                        <div className="ccpa-content">
                        <div className="section-title p-2" data-aos="fade-up">
                            <h1 className='ccpa-content-head'>DO NOT SELL MY PERSONAL INFORMATION</h1>
                        </div>
                        <p className='text-left'>We share information from registrants to our online events with carefully selected third parties in order to create a superior customer experience.</p>
                        <p className='text-left' data-aos="fade-up">Under California's CCPA law, our customers residing in California can request us not to share their personal information with our third-party partners. By submitting this form, We will not share your personal information from qualifying California residents with our select third-party vendors.</p>
                      </div>
                    <form className='ccpa-form-style' onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                        <input type="text" {...register("Name",{ required: true })} className="form-control" placeholder="Enter Your Name"/>
                            {errors.Name && <span>First name field is required</span>}
                        </div>
                        <div className="col-md-6 mb-3">
                                <input type="text" {...register("Email_Address",{ required: true })} className="form-control" placeholder="Email" />  
                                {errors.Email_Address && <span>Email field is required</span>} 
                        </div>
                        <div className='col-lg-12 mb-2'>
                             <select id="inputState" className="form-control" {...register("Country",{required:true})}>
                                <option selected>Choose City</option>
                                <option value="Pune">PUNE</option>
                                <option value="Mumbai">MUMBAI</option>
                                <option value="Nashik">NASHIK</option>
                                </select>
                        </div>
                      </div>
                            <div className='mb-2'>
                                <Button className='Loadmorebtn submit-btn' btnname="Submit" type="submit"></Button>
                            </div>
                      </form> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default CCPA;
