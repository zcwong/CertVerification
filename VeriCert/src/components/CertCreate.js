import React from 'react'


class CertCreate extends React.Component {

    render() {

        return (
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
      )
    }
} 


export default CertCreate;