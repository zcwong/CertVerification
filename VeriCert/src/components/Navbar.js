import React, {Component} from 'react';


class Navbar2 extends Component {

	render(){
		return(
		<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dapp University
          </a>
           <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                     <small className="text-secondary">
                       <small id="account">User: {this.props.account} </small>
                     </small>
           </li>
        </nav>




		);
	}


}



export default Navbar2