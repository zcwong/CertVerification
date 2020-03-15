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
import Profile from './Profile.js'



class Main extends Component{

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

  render(){
    return(

    <div>
        <Router>

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
                        <Link to="/about" className="link">
                          <li id="navigate">
                             About
                           </li>
                           </Link>
                        </div>   

                       
                        <div className="list">
                        <Link to="/query" className="link">
                          <li id="navigate">
                             Query
                           </li>
                           </Link>
                        </div>  


                       
                        <div className="list">
                        <Link to="/list" className="link">
                          <li id="navigate">
                             List
                           </li>
                           </Link>
                        </div>   

                       
                        <div className="list">
                        <Link to="/create" className="link">
                          <li id="navigate">
                             Create
                           </li>
                           </Link>
                        </div>   

                       
                        <div className="list">
                        <Link to="/profile" className="link">
                          <li id="navigate">
                             Profile
                           </li>
                           </Link>
                        </div>   
                     

                                                                        
                       

                </nav>

               

                 <Switch>
                      <Route exact path="/" component={Home2}/>
                      <Route exact path="/login" component={Home2}/>

                      <Route exact path="/about" component={AboutPage} />

                      <Route exact path="/create" render={()=> <CertCreate 
                       createCert={this.props.createCert}
                       certCount={this.props.certCount}
                      />} />

                       <Route exact path="/query" render={()=> <QueryData
                          certs={this.props.certs} 
                        />
                      } />

                      <Route exact path="/list" render={()=> <CertList
                         certs={this.props.certs} 
                       />

                     } />

                    <Route exact path="/profile" component={Profile} />

                     
            

                 


                </Switch>



        </Router>

    </div>


    );
  }
}


export default Main;