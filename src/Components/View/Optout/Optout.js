import React from 'react'
import './Optout.css';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from '../../Button/Button';
const Optout = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data =>{
        reset();
    } 
  return (
        <>
            <div className='container'>
                <div className='row opt-row'>
                    <div className='col-lg-6 justify-content-center align-items-center'>
                        <div className='p-4'>
                        <h1 class="sectionHead py-2 aos-init aos-animate" data-aos="fade-up-right"><b>To Opt Out</b> Of Marketing Communications. <br></br></h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className='col-lg-5 OptOut-form'>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" {...register("name",{ required: true })} placeholder="Enter Name" />
                            {errors.name && <span className='d-flex'>Name field is required</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email"  {...register("email",{ required: true })} placeholder="Enter Email" />
                            {errors.email && <span className='d-flex'>Email field is required</span>}
                            </Form.Group>
                            <div className='mb-3'>
                                <Form.Select id="inputState" className="form-control" {...register("city")}>
                                <option selected>Choose City</option>
                                <option value="Pune">PUNE</option>
                                <option value="Mumbai">MUMBAI</option>
                                <option value="Nashik">NASHIK</option>
                                </Form.Select>
                            </div>
                            <div className='mb-3 mt-4'>
                                <Button className='Loadmorebtn submit-btn' btnname="Submit" type="submit"></Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}
export default Optout;