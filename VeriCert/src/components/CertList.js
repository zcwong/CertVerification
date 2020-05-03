import React from 'react'


class CertList extends React.Component {
//list out all certs on blockchain
    render() {

        return (
    <div>
     <div className="center">
        <p>&nbsp;</p>
        <h1><b>Cert List</b></h1>
        <img src={require('../images/list.png')} width="5%"/>
        <p>&nbsp;</p>
        <p><b> All certificate created on the blockchain can be viewed here</b></p>
      </div>
    <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
            { this.props.certs.map((cert, key) => {
                      return(
                        <div className="card mb-4" key={key}>
                          <div className="card-header">
                            <small className="text-mutet">Author: {cert.author}</small>
                          </div>

                          <ul id="postList" className="list-group list-group-flush">
                              <li className="list-group-item">
                                <p>Name: {cert.name}</p>
                                <p>Course: {cert.course}</p>
                                <p>Results: {cert.result}</p>
                              </li>      
                                          
                              <li key={key} className="list-group-item py-2">
                                <p>Issue date: {cert.issueDate}</p>
                                <p>IC: {cert.ic}</p>
                              </li>
                            </ul>

                        </div>
                    )

                })}

          </div>
            </main>
          </div>
        </div>
        </div>
      )
    }
} 


export default CertList;