import './WhitepaperDetails.css'
import React, {useEffect,useState} from 'react';
import axios from 'axios'
import Button from '../../Button/Button'
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import DetailsCategory from '../DetailsCategory/DetailsCategory'
const WhitepaperDetails = ()=>{

    // GET API Code
        const [apidata, setApidata] = useState([]);
        const [catname, setCategoryName] = useState();
        const {title } = useParams();
        const [linkdata, setLinkdata] = useState();

        useEffect(()=> {
            axios.get(`https://b2bnetworkservices.online/post/public/${title}`)
            .then(res => {
                setApidata(res.data);
                {
                    res.data.map((item) => {
                    setCategoryName(item.category);
                     })
                }
                setLinkdata(res.data.whitePaperLink);
            })
            .catch(err =>{
                console.log(err)
            })
            }, [title])

    //any where in the page scroll on top Navigation tab click open on top
     const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };

    // Model variable
    const [show, setShow] = useState(false);
    const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});
    //model Form dowload pdf Code
    const onSubmit = (data) =>{
        alert('Please check your mail');
        reset();
        } 

    return(
        <>
            <Modal show={show} centered>
                <Modal.Header>
                <Modal.Title className='whitemodel_ttitle' data-aos='fade-up'> Enter details below for your free download</Modal.Title>
                <span className="white_modalclosebtn" onClick={()=>setShow(false)}><i className="fa fa-times-circle" aria-hidden="true"></i></span>
                </Modal.Header>
                <Modal.Body className='white_modelbody'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row' >
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                                <input name='name' type="text" className="form-control" placeholder='Your Name'
                                    {...register("name",
                                    { required: true, maxLength: 50})}
                                />
                                <div className='validtntxtdiv'>
                                    {errors.name && "Please Enter name."}
                                    {errors?.name?.type === "maxLength" && (
                                    <p >Name cannot exceed 50 characters</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-1'>
                            <div className="md-form mb-0">
                                <input name='email' type="email" className="form-control" placeholder='Your Company email'
                                    {...register("email",
                                    { required: true, maxLength: 50})}
                                />
                                <div className='validtntxtdiv'>
                                    {errors.email && "Please Enter email."}
                                    {errors?.email?.type === "maxLength" && (
                                    <p >email cannot exceed 50 characters</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='white_modelterms mx-2'>
                            <input type="checkbox" {...register("checkbox",{required:true})} name="checkbox" style={{marginTop:'1%'}}/>
                            <p className='px-2'>I would like to receive information on TDM Network events, and other communications via email from TDM Network. I can unsubscribe at any time.<Link to="/privacypolicy" onClick={scrollgoTop}>Privacy Policy</Link> And <Link to="/termsofservice" onClick={scrollgoTop}>Terms and Codition</Link></p>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 my-2'>
                           {/* <a href={apidata.whitePaperLink}> */}
                               <Button btnname="Download Content"  function={ () => setShow(false)}/>
                            {/* </a> */}
                        </div>
                    </div>
                    </form>
                </Modal.Body>
            </Modal>       
            <section>
                <div className='container my-5'>
                    <div className='row'>
                    {apidata.map((item, i) => {
                        return (
                            <>
                        <div className='col-lg-8 col-md-12 col-sm-12 '>
                        <h5 className='whitecard_title' data-aos='fade-left'>{item.title}</h5>
                            <div className='row detailwhitebox'>                            
                                <div className='col-lg-12 col-md-12 col-sm-12' data-aos='fade-up'>
                                    <img src={item.imgURL} className="img-fluid my-3 whitecardimg" alt=""/>
                                </div>                            
                                <div className='col-lg-12 col-md-12 col-sm-12'>
                                    <p className='whitecard_details py-1'data-aos='fade-right'  dangerouslySetInnerHTML={{__html:item.description}}></p>
                                    <Button btnname="Download" function={ () => setShow(true)}/>                                          
                                </div>            
                            </div>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12 text-justify py-5 px-5'>
                                   <span className='whitecard_detspan'><h6 className='whitecard_deth6'data-aos='fade-left'>Published Date:</h6><p data-aos='fade-right'>&nbsp;{item.publishDate}</p></span> 
                                   <span className='whitecard_detspan'><h6 className='whitecard_deth6'data-aos='fade-left'>Related Category:</h6><p data-aos='fade-right'>&nbsp;{item.category}</p></span> 
                                   <span className='whitecard_detspan'><h6 className='whitecard_deth6'data-aos='fade-left'>Format:</h6><p data-aos='fade-right'>&nbsp;Pdf</p></span> 
                                   <span className='whitecard_detspan'><h6 className='whitecard_deth6'data-aos='fade-left'>Number of Views:</h6><p data-aos='fade-right'>&nbsp; {item.views}</p></span>
                                   <span><h6 className='whitecard_deth6'>Social Media:</h6>
                                      <div className='whitecarddet_icons'>  
                                        <ul>
                                            <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>                                          
                                        </ul>
                                      </div>
                                   </span> 
                            </div>
                            </>
                        );
                      })}
                    </div>
                </div>
            </section>
            {/* Code for Category data here send category data to component */}
            <DetailsCategory catname1={catname} />
        </>
    )
}
export default WhitepaperDetails;