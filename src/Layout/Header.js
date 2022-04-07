import React from 'react';
import { Nav, Container, Navbar, NavDropdown} from "react-bootstrap";
import './Header.css';
import Scrollbar from './Scrollbar';
import {Link} from 'react-router-dom';

function Header() {
      //any where in the page scroll on top Navigation tab click open on top
      const scrollgoTop = () => {
      window.scrollTo({ top: 0 });
  };
  return (
    <>
     <div className='TDM_header'>
            <section className='sm-header'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4 col-md-4 col-sm-12 px-2 py-2'>
                    <div className='d-flex justify-content-center align-items-center text-light'>
                    <a className="header-support" href="mailto:contact@thedecisionmaking"><i className="fa fa-envelope ml-4 pl-2" aria-hidden="true">&nbsp;contact@thedecisionmaking.com</i></a>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12 px-2 py-2'>
                    <div className='d-flex justify-content-center align-items-center text-light'>
                    <a href="tel:+1 302-261-5312" className='call-header'> <i className="fa fa-headphones px-1" aria-hidden="true"></i>+1 302-261-5312</a>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12 px-2 py-2'>
                    <div className='d-flex justify-content-center align-items-center text-light'>
                      <i className="fa fa-clock-o" aria-hidden="true"><a href="/contact" className="header-time mx-2">Mon-Sat 9.00 - 6.00</a></i> 
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='Navbar-Main-TDM'>
            <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Brand href="#">
                      <div className="TDM_logo"></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                      <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '500px', fontWeight: '500' }}
                        navbarScroll>
                         <div className="forunderline">
                            <Nav.Link className="main-nav" as={Link} to="/" onClick={()=>scrollgoTop()}>HOME</Nav.Link>
                         </div>
                         <div className="forunderline">
                            <Nav.Link className="main-nav" as={Link} to="/about" onClick={()=>scrollgoTop()}>ABOUT</Nav.Link>
                        </div>
                        <div className="forunderline">
                        <NavDropdown title="CATEGORY" id="navbarScrollingDropdown">
                        <div className='row' style={{"padding":"0px 20px 0px 20px;"}}>
                            <div className='col-4 drop-list'>
                            <NavDropdown.Item><Link to={`/category/ELECTRONICS`}>ELECTRONICS</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/IDM`}>IDM</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/CYBERSECURITY`}>CYBERSECURITY</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/CLOUDTECH`}>CLOUDTECH</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/VOIP`}>VOIP</Link></NavDropdown.Item>
                            </div>
                            <div className='col-4 drop-list'>
                            <NavDropdown.Item><Link to={`/category/HRTECH`}>HRTECH</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/SALESTECH`}>SALESTECH</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/SUPPLY CHAIN`}>SUPPLY CHAIN</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/CLOUD ERP`}>CLOUD ERP</Link></NavDropdown.Item>
                            </div>
                            <div className='col-4 drop-list'>
                            <NavDropdown.Item><Link to={`/category/FINTECH`}>FINTECH</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/DIGITECH`}>DIGITECH</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/BUSINESSTECH`}>BUSINESSTECH</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={`/category/CX`}>CX</Link></NavDropdown.Item>
                            </div>
                          </div>
                        </NavDropdown>
                        </div>
                        <div className="forunderline">
                        <Nav.Link className="main-nav" as={Link} to="/contact" onClick={()=>scrollgoTop()}>CONTACT</Nav.Link>
                        </div>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            </section>
            <Scrollbar/>
            </div>
    </>
  )      
}

export default Header;

