import './DetailsCategory.css'
import {Link} from 'react-router-dom'
import React, {useEffect,useState} from 'react'
import axios from 'axios'

const DetailsCategory =(props)=>{
     //any where in the page scroll on top Navigation tab click open on top
     const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };
   
    //GET/FETCH API Aceesing catogory wise data from API using axios
    const [Catdata, setCatdata] = useState([]);
    useEffect(() => {  
        try {
            axios.get(`https://b2bnetworkservices.online/post/public/category/${props.catname1}`).then(res => {
                console.log(res);
                console.log(res.data);
                setCatdata(res.data);
            })
        } catch (err) {
            console.log(err)
        }
    }, [props.catname1])
    
    return(
        <>  
         <section>
                <div className='container'>
                    <div className='row'>
                        <h2 className='catdet_related'>Related Posts</h2>
                    </div>
                    <div className='row'>
                    {/* Using Map Function to access the data */}
                    {Catdata.slice(0,4).map((item, i) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 my-4" data-aos="zoom-in" key={i}>
                            <div className="card card-shadow card-one latestcard">
                                <img src={item.imgURL} className="img-fluid detcard_img" alt=""/>
                                    <div className="card-body">
                                        <p className="latestcard_category">{item.category}</p>
                                        <Link to={`/whitepaperdetails/` + item.title} onClick={scrollgoTop}><h6 className='latestcardtitle'>{item.title}</h6></Link> 
                                    </div>   
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>     
        </>
    )}
export default DetailsCategory;