import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import VeriCert from '../abis/VeriCert.json'
import Navbar from './Navbar.js'
import Main from './Main.js'
import {db,auth} from '../services/firebase'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import Home from './Home.js'
import CertCreate from './CertCreate.js'
import QueryData from './QueryData.js'
import CertList from './CertList.js'
import FailPage from './FailPage.js'
import AboutPage from './AboutPage.js'




class App extends Component {




  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchianData()
  }

   async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }



  async loadBlockchianData(){
    const web3 = window.web3

    //load account
    const accounts = await web3.eth.getAccounts()
    this.setState({account : accounts[0]})

    //network id
    const networkId = await web3.eth.net.getId()
    const networkData = VeriCert.networks[networkId]

    if(networkData){
      const veriCert = web3.eth.Contract(VeriCert.abi, networkData.address)
      this.setState({veriCert})
      const certCount = await veriCert.methods.certCount().call()
      this.setState({certCount})



       //load cert
      for (var i = 1; i <=certCount; i++) {
        const cert = await veriCert.methods.certs(i).call()
        //set state by adding new cert at back of cert list
        this.setState({
          certs: [...this.state.certs,cert]
        })

      }  

      this.setState({ loading: false})

    }else{
      window.alert("Contract not deployed to detected network")

    }
  }



    createCert(ic,name,course,result,date){
        this.setState({loading: true})
        this.state.veriCert.methods.createCert(ic,name,course,result,date).send({from: this.state.account})
        .once('receipt', (receipt) => {
         console.log("loaded")
        }) 
      }

  



  constructor(props){
    super(props)
    this.state={
      account:'',
      veriCert: null,
      certCount: 0,
      certs: [],
      loading: true,

    }
    this.createCert = this.createCert.bind(this)
    //this.addNewStudent = this.addNewStudent.bind(this)
  }



  render() {
    return (
      <div>
       


        



        <Router>
     
        <div>
        <nav className=" flex-md-nowrap p-0 shadow">
                        <Link to="/">VeriCert</Link>
                        
                    
    
                         <ul className="navbar-nav px-3">
                           <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                             <small className="text-secondary">
                               <small id="account">User: {this.state.account} </small>
                             </small>
                           </li>
                         </ul>
    
                </nav>
                <nav  className="navbar navbar-dark  bg-dark flex-md-nowrap p-0 shadow">

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/create">Create cert</Link>
                  </li>
                  <li>
                    <Link to="/query">Query</Link>
                  </li>
                  <li>
                    <Link to="/list">List</Link>
                  </li>

                </nav>

          </div>


          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/create" render={()=> <CertCreate 
              createCert={this.createCert}
              certCount={this.state.certCount}
             />} />
            <Route exact path="/query" render={()=> <QueryData
                certs={this.state.certs} 
              />
            } />
            <Route exact path="/list" render={()=> <CertList
                certs={this.state.certs} 
              />
            } />
            <Route exact path="/404" component={FailPage}/>
            <Redirect to='/404' />


          </Switch>
          </Router>


      </div>
    );
  }
}

export default App;