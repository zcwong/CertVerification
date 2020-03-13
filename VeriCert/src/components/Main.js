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
import FailPage from './FailPage.js'
import AboutPage from './AboutPage.js'
import Login from './Login'
import Home2 from './Home2.js'
import SignUp from './SignUp.js'


class Main extends Component{

  render(){
    return(

    <div>

            <Router>
                     <nav  className="navbar navbar-dark  bg-dark flex-md-nowrap p-0 shadow">

                           <li>
                             <Link to="/about">About</Link>
                           </li>
                           
                           <li>
                             <Link to="/query">Query</Link>
                           </li>
                                                      
                           <li>
                            <Link to="/login">Login</Link>
                          </li>

                          <li>
                            <Link to="/signup">Sign Up</Link>
                          </li>

                    </nav>
                     <Switch>
                          <Route  path="/" component={Home}/>
                          <Route exact path="/about" component={AboutPage} />
                          
                           <Route exact path="/query" render={()=> <QueryData
                          certs={this.props.certs} 
                        />
                      } />

                          
                          <Route exact path="/login" component={Login}/>
                          <Route exact path="/signup" component={SignUp}/>


                          


                    </Switch>

              </Router>

    </div>


    );
  }
}


export default Main;