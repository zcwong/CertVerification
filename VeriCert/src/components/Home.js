import React, { Component } from 'react';
import fire from '../services/firebase'
import Home2 from './Home2'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <div className="background">
                    <img src={require('../images/background - Copy.png')} width="100%" height="100%"/>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <div className="container-home">

                    <div className="p1">

                    <h1>Fake Certification on the Rise</h1>
                    <p>Academic certificates are a huge part of the hiring process as they serve as a gauge to the candidate’s ability. {"\n"}
                    Their results and performance are ways to measure their employability to potential employers.  {"\n"}
                    It not only proves their academic skills and knowledge, but also their reliability and dedication to their work. {"\n"}
                    There is a deep positive correlation between a candidate’s academic level with the rate of employment. {"\n"}
                    Since it is so important, people will often fake their qualifications through fake degrees. </p>

                    </div>
                    <div className="pic1">                    
                        <img src={require('../images/fraud.jpg')} width="25%"/>
                    </div>

                </div>

                <div className="container-home">
                    <div className="pic2">                    
                        <img src={require('../images/bcImg.png')} width="65%"/>
                    </div>

                    <div className="p2">

                    <h1>Verification through Blockchain</h1>
                    <p>A blockchain-based decentralised web application is created to combat degree fraud.{"\n"}
                     Blockchain has three main properties that makes it perfect for the job. {"\n"}
                     It is immutable, transparent and also decentralised, which makes data stored on blockchain{"\n"}
                     relatively safe and secure compared to the usual methods. By utilizing blockchain technology, {"\n"}
                     certficate can be put on a blockchain once it is verified by a university official. {"\n"}
                     Any user that wishes to verify their certificate and do it easily by accessing the data on the blockchain.{"\n"}
                     With the afformentioned properties of blockchain, we can make sure that all the data that is {"\n"}
                     on the blockchain is legitaimate and officially verified.  </p>

                    </div>
                    

                </div>


                <div className="container-home-pic">
                    <div className="center">
                        <h1> Get Verified in 3 Simple Steps!</h1>
                        <div className="pic3">
                            <img src={require('../images/steps.png')} width="65%"/>
                        </div>
                    </div>
                </div>
                   
                
            </div>
        );

    }

}

export default Home;