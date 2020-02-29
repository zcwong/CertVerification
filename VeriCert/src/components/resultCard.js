import React from 'react'


class resultCard extends React.Component {
  constructor(props) {
    super(props)
    }

    render() {
        return (
        <div>
          <h1>test</h1>



                       <div className="card mb-4" >
                          <div className="card-header">
                            <small className="text-mutet"> </small>
                          </div>

                          <ul id="postList" className="list-group list-group-flush">
                              <li className="list-group-item">
                                <p>Name: </p>
                                <p>Course:</p>
                                <p>Results: </p>
                              </li>      
                                          
                              <li className="list-group-item py-2">
                                <p>Issue date: </p>
                                <p>IC: </p>
                              </li>
                            </ul>

                        </div>

        </div>
      )
    }
} 


export default resultCard