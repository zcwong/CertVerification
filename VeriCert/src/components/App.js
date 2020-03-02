import React, { Component } from 'react';
import logo from '../logo.png';
import Web3 from 'web3';
import './App.css';
import VeriCert from '../abis/VeriCert.json'
import Navbar from './Navbar.js'
import Main from './Main.js'
import {db,auth} from '../services/firebase'

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

  addNewStudent(id,ic){
      db.collection('students')
        .add({
          id: id,
          ic:ic

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
    this.addNewStudent = this.addNewStudent.bind(this)
  }



  render() {
    return (
      <div>
        <Navbar account={this.state.account}/>
        {this.state.loading
          ?<div id="loader" className="text-center mt-5"><p>Loading .. </p></div>
          :<Main 
          certs={this.state.certs} 
          certCount={this.state.certCount}
          createCert={this.createCert}
          addNewStudent={this.addNewStudent}
          />

        }
      </div>
    );
  }
}

export default App;