import React,{useEffect,useState} from "react"
import './LatestWhitepaper.css'
import axios from "axios";
import Heading from '../../Heading/Heading';
import Button from '../../Button/Button';
import { Link } from "react-router-dom";
const LatestWhitepaper = ()=>{  
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

    //Load More btn functionality
    const [count, setCount] = useState(8);
    const inc = () => {
      setCount(count + 4);
      console.log(setCount);
    }
    //any where in the page scroll on top Navigation tab click open on top
        const scrollgoTop = () => {
            window.scrollTo({ top: 0 });
        };
    return(
        <>
        <section>
            <div className="container my-3">
            <Heading h1Class="clientheadwe" title="Latest WhitePapers"/>
            <p>Free-To-Access Finest Digital Library To Help You Make Better Decisions</p>
                <div className='row my-2'>
                {/* Using Map Function to access the data */}
                 {Apidata.slice(0,count).map((item, i) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 my-4" data-aos="zoom-in" key={i}>
                        <div className="card card-shadow card-one latestcard">
                            <img src={item.imgURL} className="img-fluid  latcard_img"/>
                                <div className="card-body">
                                    <p className="latestcard_category">{item.category}</p>
                                    <Link to={`/whitepaperdetails/` + item.title} onClick={scrollgoTop}><h6 className='latestcardtitle'>{item.title}</h6></Link> 
                                </div>   
                        </div>
                    </div>
                     ))}    
                    </div>
            </div>
            <Button function={() => { inc();}} btnname="Load More"/>  
        </section>
        </>
    )
}
export default LatestWhitepaper;