import React from 'react'
import {db,auth} from '../services/firebase'
import ResultCard from './ResultCard.js'

class QueryData extends React.Component {


  constructor(props) {
      super(props)
      this.state = {
       submitted: false,
       resultId: 0,
       renderComplete: false

      }

  
    this.queryData = this.queryData.bind(this)
    this.renderId = this.renderId.bind(this)
    } 



    //include promise in query data, 
  queryData(input){

      db.collection('students').where("ic", "==", input)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc =>{
            var id = doc.data().id           

            this.setState({resultId: id} , function(){
              this.setState({renderComplete: true})
            } )
         
          })

        })
        .catch(function(error){
          console.log(error);
        })
        //console.log("query function")
    }



   //query data as promise, then renderId 
   //check if finish render, only call
   renderId() {
        console.log("function called")      
        return <ResultCard resultId={this.state.resultId} certs={this.props.certs} />
  } 


    render() {
      return (
        <div>
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


               {this.state.renderComplete && this.renderId()}

              </div>
          

        </div>
      )
    }
} 


export default QueryData;