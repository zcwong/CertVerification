import React, {Component} from 'react';
import {db,auth} from '../services/firebase'
import ResultCard from './ResultCard.js'

class Main extends Component{

  constructor(props) {
      super(props)
      this.state = {
       submitted: false,
       resultId:0

      }

  
    this.queryData = this.queryData.bind(this)
    this.renderId = this.renderId.bind(this)
    } 




  queryData(input){

      db.collection('students').where("ic", "==", input)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc =>{
            var id = doc.data().id           
            //call function with param id to render result 

            this.setState({resultId: id}, () =>{
        console.log("test "+this.state.resultId)

      })
         
          })

        })
        .catch(function(error){
          console.log(error);
        })
        console.log("query function")
    }

   renderId() {
        console.log("function called")      
        return <ResultCard resultId={this.state.resultId} certs={this.props.certs} />
  } 


  render(){
    return(

    <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>

              <div>
               <form onSubmit={(event) =>{
                event.preventDefault()
                const ic = this.icContent.value
                const name = this.nameContent.value
                const course = this.courseContent.value
                const result = this.resultContent.value
                const date = this.dateContent.value
                this.props.createCert(ic,name,course,result,date)
                const id = this.props.certCount.toNumber()+1
                this.props.addNewStudent(id,ic)
                }}>


                <div className="form-group mr-sm-2">
                  <input
                    id="icContent"
                    type="text"
                    ref={(input) => {this.icContent = input}}
                    className="form-control"
                    placeholder="Enter IC"
                    required />
                </div>

                <div className="form-group mr-sm-2">
                  <input
                    id="nameContent"
                    type="text"
                    ref={(input) => {this.nameContent = input}}
                    className="form-control"
                    placeholder="Enter name"
                    required />
                </div>

                <div className="form-group mr-sm-2">
                  <input
                    id="courseContent"
                    type="text"
                    ref={(input) => {this.courseContent = input}}
                    className="form-control"
                    placeholder="Enter course"
                    required />
                </div>

                <div className="form-group mr-sm-2">
                  <input
                    id="resultContent"
                    type="text"
                    ref={(input) => {this.resultContent = input}}
                    className="form-control"
                    placeholder="Enter result"                  
                    required />
                </div>

                <div className="form-group mr-sm-2">
                  <input
                    id="dateContent"
                    type="text"
                    ref={(input) => {this.dateContent = input}}                    
                    className="form-control"
                    placeholder="Enter issue date"                    
                    required />
                </div>

                <button type="submit" className="btn btn-primary btn-block"> Create </button>
              </form>
              </div>


              <p>&nbsp;</p>

              <div>

                <form onSubmit={(event) =>{
                  event.preventDefault()
                  const ic = this.ic.value
                  this.queryData(ic)
                  this.setState({ submitted: true })

                }}>


                  <label>
                    ID:
                    <input 
                      id="ic"
                      type="text"
                      ref={(input) => {this.ic=input}}/>
                  </label>

                  <button type="submit">search</button>

              </form>
               {this.state.submitted && this.renderId()}

              </div>

              <p>&nbsp;</p>
              <p>&nbsp;</p>


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
            </main>
          </div>
        </div>


    );
  }
}


export default Main;