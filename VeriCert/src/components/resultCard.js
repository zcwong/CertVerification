import React from 'react'


class ResultCard extends React.Component {
  constructor(props) {
    super(props)
    }




    render() {
        return (
        <div>

            <div className="card mb-4" >
               <div className="card-header">
                 <small className="text-mutet"> </small>
               </div>

               <ul id="postList" className="list-group list-group-flush">
                   <li className="list-group-item">
                     <p>Name:{this.props.certs[0].name}</p>
                     <p>Course: {this.props.certs[0].course}</p>
                     <p>Results: {this.props.certs[0].reuslt}</p>
                   </li>      
                               
                   <li className="list-group-item py-2">
                     <p>Issue date:{this.props.certs[0].issueDate} </p>
                     <p>IC: {this.props.certs[0].ic}</p>
                   </li>
                 </ul>

             </div>

        </div>
      )
    }
} 


export default ResultCard