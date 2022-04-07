import React,{useState,useEffect} from 'react';
import Header from '../../../Layout/Header';
import { TailSpin } from  'react-loader-spinner';
import './Loader.css';
function Loader() {
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },300000)
    },[])
      return(
          <>
          <div className='container'>
              <div className='row'>
                {
                    loading ?                  
                    <section className="loader">
                    <TailSpin color="#00BFFF" height={80} width={80} />
                    </section>
                    :
                <Header/>
                }
              </div>
          </div>
         </>
    )
}

export default Loader