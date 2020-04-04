import React, { Component } from 'react';
import fire from '../services/firebase'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import {db,auth} from '../services/firebase'
import Popup from "reactjs-popup";




class Home extends Component {

  
  constructor(props) {
      super(props)
      this.state = {
       email:"",
       fname:"",
       lname:"",
       school:"",
       proof:"",
       num:"",
       loading:true,
       id:"",



       
      }
        this.logout = this.logout.bind(this);
        this.updateData = this.updateData.bind(this);


  
  
    } 

    logout() {
        fire.auth().signOut();
    }
    componentDidMount(){
        var user = fire.auth().currentUser.email;
        //  console.log(user)

         db.collection('school').where("Email", "==", user)
        .get()
        .then(snapshot => {

          snapshot.forEach(doc =>{
            var id = doc.id
            var email = doc.data().Email  
            var fname = doc.data().FirstName
            var lname = doc.data().LastName
            var school = doc.data().School
            var num = doc.data().Num
            var proof = doc.data().Proof

            this.setState({
                email:email,
                fname:fname,
                lname:lname,
                school:school,
                proof:proof,
                num:num,
                id:id



            })
            
         
          })
          this.setState({
            loading:false
          })

        })
        .catch(function(error){
          console.log(error);
        })


      }


      updateData(event,Refname, Relname, Reschool, Reproof, Renum){
        console.log("test")
        
        var docId = this.state.id
        db.collection('school').doc(docId)
          .update({
      
            FirstName: Refname,
            LastName: Relname,
            Num: Renum,
            Proof:Reproof,
            School:Reschool


          })

          //bug with sometimes cant update
          window.location.reload(true); 



      }






    render() {
        return (
        <div>

        {this.state.loading
            ?<h1>Loading...</h1>
           :(
              <div>
                <div className="profileContainer">
                     <p>&nbsp;</p>
                     <h1 className="center">Profile</h1>
                     <p>Email: {this.state.email}</p>
                     <p>First name: {this.state.fname}</p>
                     <p>Last name: {this.state.lname}</p>
                     <p>Affiliated university: {this.state.school}</p>
                     <p>Office number: {this.state.num}</p>
                     <p>Wallet id: {this.state.proof}</p><p>&nbsp;</p>
                     <button class="loginButton"onClick={this.logout}>Logout</button>
                
                 </div>

          <Popup
            trigger={<button className="button"> Edit </button>}
            modal
            closeOnDocumentClick
          >
           <form onSubmit={(event) =>{
                  event.preventDefault()
                  
                  
                  const Refname = this.FnameContent.value
                  const Relname = this.LnameContent.value
                  const Reschool = this.SchoolContent.value
                  const Reproof = this.ProofContent.value
                  const Renum = this.NumContent.value 
                  this.updateData(event,Refname, Relname, Reschool, Reproof, Renum)

        
                }}>




        
                  <div className="form-group">
                    <label htmlFor="InputFname">First name</label>
                          <input
                            id="FnameContent"
                            type="text"
                            ref={(input) => {this.FnameContent = input}}
                            className="form-control"
                            placeholder="Enter first name"
                            required />
                  </div>
        
                  <div className="form-group">
                    <label htmlFor="InputLname">Last name</label>
                          <input
                            id="LnameContent"
                            type="text"
                            ref={(input) => {this.LnameContent = input}}
                            className="form-control"
                            placeholder="Enter last name"
                            required />
                  </div>
        
                  <div className="form-group">
                    <label htmlFor="InputSchool">School</label>
                          <input
                            id="SchoolContent"
                            type="text"
                            ref={(input) => {this.SchoolContent = input}}
                            className="form-control"
                            placeholder="Enter school"
                            required />
                  </div>

                  
                  
        
                  <div className="form-group">
                    <label htmlFor="InputProof">WalletId</label>
                          <input
                            id="ProofContent"
                            type="text"
                            ref={(input) => {this.ProofContent = input}}
                            className="form-control"
                            placeholder="Enter wallet id"
                            required />
                  </div>


                  <div className="form-group">
                    <label htmlFor="InputNum">Office number</label>
                          <input
                            id="NumContent"
                            type="text"
                            ref={(input) => {this.NumContent = input}}
                            className="form-control"
                            placeholder="Enter number"
                            required />
                  </div>

        
                 
        
                
        
         
        
                  <div className="center">
                    <button type="submit" className="signUpButton"> Update </button>
                  </div>
                </form>
        
 
       



          </Popup>
              </div>
              )
        }     


         

           
        </div>
        );

    }

}

export default Home;