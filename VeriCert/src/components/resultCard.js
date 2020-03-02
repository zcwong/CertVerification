import React from 'react'


class ResultCard extends React.Component {
  constructor(props) {
    super(props)
    }



    componentDidMount(){
      const id = this.props.resultId
    }




    render() {

        const id = this.props.resultId-1;


        return (
        <div>

             <div className="card mb-4">
                  <div className="card-header">
                    <small className="text-mutet"> {this.props.certs[id].author}</small>
                  </div>

                  <ul id="postList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>Name: {this.props.certs[id].name}</p>
                        <p>Course: {this.props.certs[id].course}</p>
                        <p>Results: {this.props.certs[id].result}</p>
                      </li>      
                                  
                      <li className="list-group-item py-2">
                        <p>Issue date: {this.props.certs[id].issueDate}</p>
                        <p>IC: {this.props.certs[id].ic}</p>
                      </li>
                    </ul>

            </div>

        </div>
      )
    }
} 


export default ResultCard