import React from 'react';
import './Unsubscribe.css';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; 
import axios from 'axios';
import Button from '../../Button/Button';
import unsubscribe from '../../../img/footerpagesimg/unsubscribe.jpg';
function Unsubscribe() {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const onSubmitUnsubscribe = data => {
        console.log(data);
            axios.post(``, data )
            .then(res => {
                Swal.fire({
                position: 'centerd',
                icon: 'success',
                title: 'Data Submitted.',
                showConfirmButton: false,
                timer: 2000
            })
        reset();  
      })
    }
  return (
    <section className='unsubcribe'>
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-lg-8 col-md-8 d-flex justify-content-center mb-2 mt-2' data-aos="fade-right">
                        <div className='unsubcribe-div-content text-center'>
                            <div className='unsubscribe-content'>
                                <h2 className='unsubscribe-content-head'>Do You Want To Unsubscribe ?</h2>
                                <p className='font-weight-bold'>We hate goodbyes-but if you have a change of heart, we'll always be here with great ideas to share. Please enter your mail address below to unsubscribe..</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmitUnsubscribe)} className="un-form">
                                <div className="form-group col-lg-12">
                                    <div className="form-group">
                                        <input type="email" {...register("email",{ required: true })} className="form-control" placeholder="Enter email"/>
                                        {errors.email &&<span>Enter your email.</span>}
                                    </div>
                                </div>
                                <div className='mb-2'>
                                <Button className='Loadmorebtn submit-btn' btnname="Submit" type='submit'></Button>
                                </div>     
                            </form>
                        </div>
                </div>
                <div className="col-lg-4 col-md-4 mb-2 mt-2" data-aos="fade-left">
                    <div className="text-center">
                        <img src={unsubscribe} alt="" className='unsubscribe-img img-fluid'></img>
                    </div>
                </div>
            </div>
            </div>
    </section>
  )
}

export default Unsubscribe;
