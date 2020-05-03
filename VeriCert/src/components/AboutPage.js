import React from 'react'



class AboutPage extends React.Component {
 

    render() {
    return (
        <div>
          
        <p>&nbsp;</p>

		<div className="title">    
          	<h1><b>About</b></h1>
        </div>
      

          <div className="about-container">

              <div className="one">

              <h1>Ethereum</h1>
              <p>Launched in 2015, Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether. 
              It enables SmartContracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control, or interference from a third party.
              Ethereum is not just a platform but also a programming language (Turing complete) running on a blockchain, helping developers to build and publish distributed applications.
              The applications run on Ethereum are run on a platform-specific cryptographic token, ether. During 2014, Ethereum had launched a pre-sale for ether which had received an
               overwhelming response. Ether is like a vehicle for moving around on the Ethereum platform and is mostly sought by developers looking to develop and run applications inside Ethereum. 
               Ether is used broadly for two purposes: 
              it is traded as a digital currency exchange like other cryptocurrencies, and it is used inside Ethereum to run applications and even to monetize work.
              </p>

              </div>
              <div className="center">                    
                  <img src={require('../images/Ethereum.png')} width="35%" className="ethereum"/>
              </div>

          </div>
   
    
         

         <div className="dappContainer">
         	  <h1>Dencentralised Application</h1>
               <p>Imagine an application that doesn’t run on one server but harnesses the excess power of thousands of computers globally and that can be controlled by business
                automation software that ensures if a specific parameter is met, only then can a function be carried out. That’s a distributed application – or dApp, as it's sometimes
                 abbreviated – and there are thousands available for download.Running atop a blockchain, peer-to-peer (P2P) network that acts as a kind of operating system, dApps create 
                 an innovative open-source software ecosystem that is both secure and resilient. And it allows developers to create new online tools, many of which have piqued the interest 
                 of global business markets.</p>
                <p>&nbsp;</p>


          	<img src={require('../images/dapp.jpeg')} width="100%"  className="dapp" />
          </div>
          <p>&nbsp;</p>

        </div>




      )
  }
}

export default AboutPage 