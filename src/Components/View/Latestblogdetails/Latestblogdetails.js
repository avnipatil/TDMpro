import './Latestblogdetails.css'
import React,{useEffect,useState} from "react"
import axios from "axios";
import Button from '.././../Button/Button'
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { TailSpin } from  'react-loader-spinner';
const Latestblogdetails =()=>{
    // GET API Code
      const [apidata, setApidata] = useState([]);
      const[Loader, setLoader]=useState(false)
      const [author,setAuthor] = useState();
      const [newauth ,setNewauth] = useState([])
      const { title } = useParams();
      
    //  Blog ID details API
      useEffect(()=> {
          setLoader(true)
          axios.get(`https://b2bnetworkservices.online/blogs/public/${title}`)
          .then(res => {
            if (res.status === 200) {
                {
                    res.data.blog.map((item) => {
                        setApidata(item);
                        setAuthor(item.author);
                        console.log(item)
                        axios.get(`https://b2bnetworkservices.online/blogs/authors/${item.author}`)
                        .then(res => {
                            console.log(res.data)
                            setNewauth(res.data);
                        })
                    })
                    setLoader(false)
                }
            }
          })
          }, [title, author])
          
     // Comment Form POST API   
        const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});
            const onSubmit = (data) =>{
                console.log(data);
                reset();
            }
   
    return(
        <>      
        <section>
            <div className="container">
                <div className="row">
                    <div className='col-lg-12 col-md-12 col-sm-12 contact_bannner' data-aos="fade-right">
                        <h1 className='conban_txt'>Blog</h1>
                    </div>                
                    <div className="col-lg-4 col-md-6 col-sm-12 my-5 ">
                    {!Loader ?
                            <>
                                <div className='lateblog_detboxcol4'>
                                    <div className='blogdetsome_det my-2'><span className='latdetdatebold'>Date:&nbsp;&nbsp;&nbsp;&nbsp; {apidata.publishDate}</span></div>
                                    <div className='blogdetsome_det my-2'><span className='latdetdatebold'>Category:&nbsp;&nbsp;&nbsp;&nbsp;{apidata.category}</span></div>
                                    <div className='blogdetsome_det my-2'><span className='latdetdatebold'>Views:&nbsp;&nbsp;&nbsp;&nbsp; {apidata.views}</span></div>  
                                    <div className='blogdetsome_det my-2'><span className='latdetdatebold'>Likes:&nbsp;&nbsp;&nbsp;&nbsp; {apidata.likes}</span></div>                
                                    <h5 className='blogdetsome_det'>Follows US</h5>
                                        <div className='whitecarddet_icons' data-aos="fade-up">  
                                            <ul>
                                                <li><a href={newauth.facebookLink}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href={newauth.twitterLink}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href={newauth.linkedinLink}><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                <li><a href={newauth.instagramLink}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>                                      
                                            </ul>
                                        </div>
                                </div>
                            </>
                        : 
                        <section className="loader">
                           <TailSpin color="#00BFFF" height={80} width={80} />
                        </section>
                    }
                        
                        <div className='blogdet_catdiv'>
                            <h3 className='blogdetrec_head py-2'>Category</h3>
                            <div className=''>
                                <span className='latdet_category' data-aos="fade-left">All</span>
                            </div>
                            <div className='my-4'>
                                <span className='latdet_category'>Cloud Technologies</span>
                                <span className='latdet_category mx-2'>AI</span>
                            </div>
                            <div className='my-4'>
                                <span className='latdet_category'>HRTECH</span>
                                <span className='latdet_category mx-2'>MARTECH</span>
                                <span className='latdet_category mx-2'>PITECH</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-8 col-md-6 col-sm-12 my-5">
                        {!Loader ?
                            <>
                            <img src={apidata.coverImg} className="img-fluid" data-aos="fade-left"/>
                            </>
                        : 
                        <section className="loader">
                            <TailSpin color="#00BFFF" height={80} width={80} />
                        </section>
                        }

                            <div className="row blogdet_authorbox" data-aos="fade-right">
                                {/* Author details Here */}
                                <div className="col-lg-6 col-md-12 col-sm-12 my-2">
                                <img src={newauth.authorPic} className="img-fluid blogdet_profile"/>                 
                                <h5 className="my-1 mx-3 blogdet_authname mt-3">{newauth.name}</h5>
                                    <span className="my-1 text-muted">{newauth.email}</span>
                                    <div className='blogdet_icons my-2' data-aos="fade-up">  
                                        <ul>
                                            <li><a href={newauth.facebookLink}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href={newauth.twitterLink}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href={newauth.linkedinLink}><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                            <li><a href={newauth.instagramLink}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h5 className="my-3">Caterogy</h5> 
                                    <Button btnname={apidata.category}/>
                                    <p>{newauth.authorNotes}</p>
                                </div>                   
                            </div>

                    { !Loader ?
                           <div className="blogdetpwatxt">
                                <h1 className="blogdetpwatxt_head my-4">{apidata.title}</h1>
                                {/* using html react parser to convert data */}
                                <p dangerouslySetInnerHTML={{__html:apidata.description}}></p>                            
                            </div> 
                       : 
                       <section className="loader">
                            <TailSpin color="#00BFFF" height={80} width={80} />
                        </section>
                    }
                    {/* Form Leave Comment */}
                        <div className='blogdet_commbox'>
                            <h3 style={{color:'#413aa4'}}>Leave Comment</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6 my-2">
                                        <div className="md-form mb-0">
                                            <input name='name' type="text" className="form-control blogdetform_box" placeholder='Name Here'
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
                                    <div className="col-md-6 my-2">
                                        <div className="md-form mb-0">
                                            <input name="email" type="email" className="form-control blogdetform_box" placeholder='Business Email'
                                                {...register("email",
                                                  { required: true, maxLength: 30})}/>
                                                   <div className='validtntxtdiv'>
                                                      {errors.email && "Please Enter email."}
                                                          {errors?.email?.type === "maxLength" && (
                                                          <p >Email cannot exceed 30 characters</p>
                                                      )}
                                                  </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 my-2">
                                            <div className="md-form">
                                                <textarea name='message' type="text"  rows="3" className="form-control  blogdetform_box" placeholder='Comment'
                                                   {...register("message",
                                                   { required: true, maxLength: 30})}/>
                                                    <div className='validtntxtdiv'>
                                                       {errors.message && "Please Enter message."}
                                                           {errors?.message?.type === "maxLength" && (
                                                           <p >message cannot exceed 30 characters</p>
                                                       )}
                                                   </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4'><Button btnname="Submit"/></div>                           
                            </form>
                        </div>                  
                    </div>                                   
                </div>
            </div>
        </section>
        </>
    )
}
export default Latestblogdetails;