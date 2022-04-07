import './LatestBlogs.css'
import React,{useEffect,useState} from "react"
import axios from "axios";
import Heading from "../../Heading/Heading";
import { Link } from 'react-router-dom';
const LatestBlogs =()=>{
    // https://b2bnetworkservices.online/blogs/public
       //GET/FETCH API Logic for Aceesing data from API using axios
       const [Apidata, setApidata] = useState([]);
       useEffect(() => {  
           try {
               axios.get('https://b2bnetworkservices.online/blogs/public').then(res => {
                  //  console.log(res);
                //    console.log(res.data.blogs);
                   setApidata(res.data.blogs);
               })
           } catch (err) {
               console.log(err)
           }
       }, [])
//any where in the page scroll on top Navigation tab click open on top
      const scrollgoTop = () => {
        window.scrollTo({ top: 0 });
    };
  
    return(
        <>
        <section className='latestblogsec py-4'>
            <div className="container">
                <Heading h1Class="clientheadwe" title="Latest Blogs"/>
                <p>Allowing Decision Makers Analyze And Compare Products And Services</p>
                <div className='row'>
                    {
                        Apidata.slice(0,4).map((data,i) => (
                            <div className='col-lg-3 col-md-6 col-sm-6 latestblogcols py-3' data-aos="fade-up" key={i}>
                                <img alt="cover-img" src={data.coverImg}className='img-fluid latestblogimg' /> 
                               <Link to={`/latestblogdetails/`+ data.title} onClick={scrollgoTop}> 
                                    <p className='latestblogtitle py-2'>{data.title}</p>
                               </Link>
                            </div>      
                        ))
                    }
                </div>
            </div>
        </section>
        </>
    )
}
export default LatestBlogs;