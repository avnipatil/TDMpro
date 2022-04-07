import React,{Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route,Routes,Navigate} from 'react-router-dom';
import Home from './Components/View/Home/Home';
import AOS from "aos";
import Footer from './Layout/Footer'; 
import Header from './Layout/Header';
import PrivacyPolicy from './Components/View/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './Components/View/TermsOfService/TermsOfService';
import Unsubscribe from './Components/View/Unsubscrib/Unsubscribe';
import CCPA from './Components/View/CCPA/CCPA';
import Optout from './Components/View/Optout/Optout';
import WhitepaperDetails from './Components/View/WhitepaperDetails/WhitepaperDetails';
import About from './Components/View/About/About'
import Contact from './Components/View/Contact/Contact'
import Category from './Components/View/Category/Category';
import Loader from './Components/View/Loader/Loader';
import Pagenotfound from './Components/View/Pagenotfound/Pagenotfound';
import Latestblogdetails from './Components/View/Latestblogdetails/Latestblogdetails'


AOS.init({
  duration: 1500
 });
 
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
      <Header/>
      <div className="main" style={{overflow:"hidden"}}></div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route path="/termsofservice" element={<TermsOfService/>}/>
            <Route path="/unsubscribe" element={<Unsubscribe/>}/>
            <Route path="/ccpa_law" element={<CCPA/>}/>
            <Route path="/opt-out" element={<Optout/>}/>
            <Route path='/whitepaperdetails/:title' element={<WhitepaperDetails/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='/contact' element={<Contact/>}/>  
            <Route path='/category/:category' element={<Category/>}/>
            <Route path='/latestblogdetails/:title' element={<Latestblogdetails/>}/>
            <Route path='/pagenotfound' element={<Pagenotfound />}/>
            <Route path="*" element={<Navigate to ="/pagenotfound" />}/>
        </Routes>
        <Footer/>
        </Suspense>
    </BrowserRouter>
    </div>
  );
}
export default App;
