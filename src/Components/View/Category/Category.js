import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './Category.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Category() {
    //Skeletone
    const [Loder, setLoader] = useState(false)
    //get category using useparam
    const { category } = useParams()
    //GET/FETCH API Logic for Aceesing data from API using axios
    const [Apidata, setApidata] = useState([]);
    useEffect(() => {  
        setLoader(true)
        try {
            axios.get(`https://b2bnetworkservices.online/post/public/category/${category}`).then(res => {
                setApidata(res.data);
                setLoader(false);
            })
        } catch (err) {
            console.log(err)
            setLoader(true)
        }
    }, [category])

    const skeleton = [0, 1, 2, 3].map(() => {
        return (
            <>
                <div className="col-lg-3 col-md-6 col-sm-6 my-4" key={Math.random()}>
                    <div className="card card-shadow card-one Category-latestcard skeleton-loader">
                        <img className='card-skel-img' alt=""></img>
                        <div className="Category-card-body-div px-4 py-2">
                            <p className="Category-card-body-p"></p>
                            <span className="Category-card-body-h6"></span>
                        </div>
                    </div>
                </div>
            </>
        )
    })
  return (
    <>
    <section>
        <div className='container'>
            <div className='row'>
                <div className='Search-heading mt-4'>
                    <h5> Search Result : <b className="text-uppercase">{category}</b></h5>
                </div>
            </div>
        </div>
    </section>
    <section className='Category-tdm'>
            <div className="container">
                <div className='row my-2'>
                    {/* Using Map Function to access the data */}
                    {
                     !Loder? Apidata.map((item,i)=>{
                        return(
                            <>
                                <div className="col-lg-3 col-md-6 col-sm-6 my-4" data-aos="zoom-in" key={i}>
                                    <div className="card card-shadow card-one Category-latestcard">
                                        <img src={item.imgURL} className="img-fluid" alt=""/>
                                            <div className="Category-card-body px-4 py-2">
                                                <Link to={`/whitepaperdetails/`+ item.title}>
                                                    <h6 className='Category-latestcardtitle'>{item.title}</h6>
                                                </Link> 
                                            </div>
                                            <div class=" mt-auto clearfix">
                                                <div>
                                                    <small class="pull-left"><i class="fa fa-calendar mx-2"></i>15-09-2021</small>
                                                    <p className="Category-latestcard_category">{item.category}</p>
                                                </div>
                                            </div>   
                                    </div>
                                </div>
                            </>
                        )
                    }):skeleton
                } 
                </div>
            </div>
    </section>
    </>
  )
}

export default Category