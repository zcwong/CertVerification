import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import VeriCert from '../abis/VeriCert.json'
import Navbar from './Navbar.js'
import {db,auth} from '../services/firebase'
import fire from '../services/firebase'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import Home from './Home.js'
import CertCreate from './CertCreate.js'
import QueryData from './QueryData.js'
import CertList from './CertList.js'
import AboutPage from './AboutPage.js'
import Login from './Login'
import Home2 from './Home2.js'
import SignUp from './SignUp.js'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



class Main extends Component{

  render(){
    return(
       <Router>
            <div>
                    <div className="nav">
                            <nav className=" flex-md-nowrap p-0 shadow">
                        
                            <Link to="/">
                               <div className="logo">
                                   <img src={require('../images/vericert.png')} width="150" height="40"  />
                                   <img src={require('../images/logo.png')} width="55" height="50"  />
                               </div>
                            </Link>
                           

                             <small className="metamask">
                             {this.props.account
                                ?<p id="account">Metamask User: {this.props.account} </p>
                                :<p>Hi,guest</p>
                               
                             }
                             </small>
                          
            
                          </nav>
                    </div>
                
               
                     <nav  className="navbar">
                           
                         

                                                
                        <div className="list">
                          <Link to="/login">
                          <li id="navigate">
                             Login
                           </li>
                          </Link> 
                          </div>

                         
                          <div className="list">
                          <Link to="/signup">
                          <li id="navigate">
                             SignUp
                           </li>
                          </Link> 
                          </div>

                          <div className="list">
                          <Link to="/query">
                           <li id="navigate">
                             Query
                           </li>
                          </Link> 
                          </div>

                           <div className="list">
                            <Link to="/about" className="link">
                          <li id="navigate">
                             About
                           </li>
                           </Link>
                        </div>   
                        
                    </nav>
                     <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route exact path="/about" component={AboutPage} />
                          
                           <Route exact path="/query" render={()=> <QueryData
                          certs={this.props.certs} 
                        />
                      } />

                          
                          <Route exact path="/login" component={Login}/>
                          <Route exact path="/signup" component={SignUp}/>


                          


                    </Switch>

  <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">VeriCert.com is an application to help solving degree fraud using Blockchain technology. 
            The technology behind Blockchain makes it the perfect match to solve this issuee as it is immutable, decentralized and transparent. 
            This application will provide a platform for people to upload digital certificates to Blockchain and to verify their certificate in 
            an easy and accessible way.</p>
          </div>

           <div class="col-sm-12 col-md-6">
            <h6>Acknowledgement</h6>
              <li><a class="twitter" href="#">Dapp University<i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#">Mr Chew Sze Ker<i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#">Friends and Family<i class="fa fa-linkedin"></i></a></li>   
          </div>

          
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>



              

    </div>
</Router>

    );
  }
}


export default Main;