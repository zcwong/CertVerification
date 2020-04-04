import React from 'react'
import {db,auth} from '../services/firebase'
import ResultCard from './ResultCard.js'

class QueryData extends React.Component {


  constructor(props) {
      super(props)
      this.state = {
       submitted: false,
       resultId: 0,
       renderComplete: false,
       loading:true,


      }

  
    this.queryData = this.queryData.bind(this)
    this.renderId = this.renderId.bind(this)
    this.returnResult = this.returnResult.bind(this)

    } 



  returnResult(){
    if(this.state.loading){

      return <h1>loading...</h1>

    }else{


      if(this.state.errorState){

        return <img src={require('../images/notFound.png')} width="300px" height="300px"/>
       
      }else{
          
        return <div>{this.state.renderComplete && this.renderId()}</div>
         
      }



    }

        

    


  }

    //include promise in query data, 
  queryData(input){
      db.collection('students').where("ic", "==", input)
        .get()
        .then(snapshot =>{
            if(snapshot.empty){
              this.setState({
                errorMsg:"Not found",
                errorState:true
              })
            }else{
               snapshot.forEach(doc =>{
                  var id = doc.data().id           

                  this.setState({resultId: id} , function(){
                      this.setState({
                        renderComplete: true,
                        errorState:false
                      })
                      })         
              })
            }
            this.setState({
              loading:false
            })


        })
        
        .catch((error) => {
          console.log(error)
        
      })
        //console.log("query function")
    }



   //query data as promise, then renderId 
   //check if finish render, only call
   renderId() {

        return <ResultCard resultId={this.state.resultId} certs={this.props.certs} />
       
  } 





    render() {
      return (
          <div className="queryContainer">
            <div className="row">
              
              <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
             
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
                      ref={(input) => {this.ic=input}}
                      required/>
                  </label>

                  <button type="submit">search</button>

              </form>
              <p>&nbsp;</p>

              <div>



              {this.state.submitted
                ?this.returnResult()
                :<img src={require('../images/search2.png')} width="70% " height="600px"/>

              }

            
              </div>
                             
                </div>
             </main>
            </div>
        </div>
      )
    }
} 


export default QueryData;