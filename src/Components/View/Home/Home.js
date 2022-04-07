import './Home.css'
import React,{useEffect,useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import LatestBlogs from '../LatestBlogs/LatestBlogs'
import Companyslider from '../CompanySlider/CompanySlider';
import LatestWhitepaper from '../LatestWhitepaper/LatestWhitepaper';
const Home =()=>{

    //GET/FETCH API Logic for Aceesing data from API using axios
     const [Apidata, setApidata] = useState([]);
     useEffect(() => {  
         try {
             axios.get('https://b2bnetworkservices.online/post/public').then(res => {
                //  console.log(res);
                //  console.log(res.data);
                 setApidata(res.data);
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
        <section className="Home-page">
            <div className="container">
                <div className="row">
                {
                    Apidata.slice(0,1).map((item,i)=>(
                    <div className="col-lg-8 col-md-8 col-sm-12 my-2" key={i}>
                        <div className='member'data-aos="fade-right" data-aos-delay="100">
                        <Link to={`/whitepaperdetails/` + item.title} onClick={scrollgoTop}>
                            <div className="member-img">
                                <div className="btn03">
                                    <img src={item.imgURL} alt="" className='cl-8-img'/>
                                    <div className="ovrly"></div>
                                </div>
                            </div>
                        </Link>
                        </div>                        
                    </div>
                       ))
                    }
                    <div className="col-lg-4 col-md-4">
                        <div className='row'>
                        {
                            Apidata.slice(1,3).map((item,i)=>(  
                                <div className="col-lg-12 col-md-12 col-sm-12 my-2" key={i}>
                                <div className="member" data-aos="fade-left" data-aos-delay="100">
                                <Link to={`/whitepaperdetails/` + item.title} onClick={scrollgoTop}>
                                    <div className="member-img">
                                        <div className="btn03">
                                            <img src={item.imgURL} alt="" className='cl-4-img'/>
                                            <div className="ovrly"></div>
                                        </div>
                                    </div>
                                </Link>
                                </div>
                            </div>
                            ))
                        }     
                        </div>
                    </div>
                </div>
                    <div className='row'>
                        {
                            Apidata.slice(4,7).map((item,i)=>(
                                <div className="col-lg-4 col-md-4 my-2" key={i}>
                                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                                    <Link to={`/whitepaperdetails/` + item.title} onClick={scrollgoTop}>
                                    <div className="member-img">
                                        <div className="btn03">
                                            <img src={item.imgURL} alt="" className='cl-44-img'/>
                                            <div className="ovrly"></div>
                                        </div>
                                    </div>
                                    </Link>
                                    </div>
                                </div>
                            ))
                        }                   
                    </div>                    
            </div>
        </section>
        <LatestWhitepaper/>
        <LatestBlogs/>
        <Companyslider/>
        </>
    )
}
export default Home;