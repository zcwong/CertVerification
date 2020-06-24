import React from 'react'
import {db,auth} from '../services/firebase'


class CertCreate extends React.Component {




 //add information to database   
    addNewStudent(id,ic){
        db.collection('students')
          .add({
            id: id,
            ic:ic
    
          })
    }

   constructor(props){
    super(props)

    
    this.addNewStudent = this.addNewStudent.bind(this)
  }

  
    render() {

        return (

        <div>

        <div className="center">
             <p>&nbsp;</p>
              <h1><b> Create cert</b> </h1>
              <div className="center">
                <img src={require('../images/create.png')} width="40%"/>
              </div>
            </div>
        <div className="createForm">
        <div className="container-fluid mt-5">
            <div className="row">

              
              <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">

                                 

               <form onSubmit={(event) =>{
                event.preventDefault()
                const ic = this.icContent.value
                const name = this.nameContent.value
                const course = this.courseContent.value
                const result = this.resultContent.value
                const date = this.dateContent.value
                this.props.createCert(ic,name,course,result,date)
                const id = Number(this.props.certCount)+1
                this.addNewStudent(id,ic)
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
             </main>
            </div>
        </div>
        </div>
      </div>
      )
    }
} 


export default CertCreate;