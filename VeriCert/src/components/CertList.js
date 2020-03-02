import React from 'react'


class CertList extends React.Component {

    render() {

        return (
        <div>
            { this.props.certs.map((cert, key) => {
                      return(
                        <div className="card mb-4" key={key}>
                          <div className="card-header">
                            <small className="text-mutet"> {cert.author}</small>
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
      )
    }
} 


export default CertList;