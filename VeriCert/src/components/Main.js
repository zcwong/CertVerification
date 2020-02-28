import React, {Component} from 'react';

class Main extends Component{



//create global variable index, when create new cert
//incremet index and put it as id
//so id will be same as certificate id




	render(){
		return(

		<div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <p>{this.props.certs[1].name}</p>

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
                  

                }}>
                  <label>
                    ID:
                    <input 
                      id="id"
                      type="text"
                      ref={(input) => {this.id=input}}/>
                  </label>

                  <button type="submit">search</button>

              </form>

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