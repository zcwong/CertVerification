import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import Home from './Home.js'


class Navbar extends Component{

	render(){
		return(


      <div>

        <Router>


           <nav className=" flex-md-nowrap p-0 shadow">
                <Link to="/about">VeriCert</Link>
                
            
    
                 <ul className="navbar-nav px-3">
                   <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                     <small className="text-secondary">
                       <small id="account">User: {this.props.account} </small>
                     </small>
                   </li>
                 </ul>
    
            </nav>





        </Router>
      </div>

		);
	}
}


export default Navbar;