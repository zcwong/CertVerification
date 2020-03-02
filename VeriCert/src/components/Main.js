import React, {Component} from 'react';
import CertCreate from './CertCreate.js'
import QueryData from './QueryData.js'
import CertList from './CertList.js'


class Main extends Component{

  render(){
    return(

    <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>

              <CertCreate 
                createCert={this.props.createCert}
                addNewStudent={this.props.addNewStudent}
                certCount={this.props.certCount}
              />

              <p>&nbsp;</p>

              <QueryData
                certs={this.props.certs} 
              />

              <p>&nbsp;</p>

              <CertList
                certs={this.props.certs} 
              />

              </div>
            </main>
          </div>
        </div>


    );
  }
}


export default Main;