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

    //function to log out of account
    logout() {
        fire.auth().signOut();
    }


    //get user information when component mount
    componentDidMount(){
        var user = fire.auth().currentUser.email;
        
        //get info into database
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

            //store info from database to a state
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


      //update new data to database
      updateData(event,Refname, Relname, Reschool, Reproof, Renum){
        
        var docId = this.state.id
        db.collection('school').doc(docId)
          .update({
      
            FirstName: Refname,
            LastName: Relname,
            Num: Renum,
            Proof:Reproof,
            School:Reschool


          })


         
         window.location.reload(true); 



      }






    render() {
        return (
        <div>

        {this.state.loading
            ?<h1>Loading...</h1>
           :(
              <div className="pContainer">
                <div className="profileContainer">
                     <p>&nbsp;</p>
                     <h1 className="center"><b>Profile</b></h1>
                     <div className="center">
                        <img src={require('../images/profile.png')} width="10%"/>
                      </div>
                     <p><b>Email: {this.state.email}</b></p>
                     <p><b>First name: {this.state.fname}</b></p>
                     <p><b>Last name: {this.state.lname}</b></p>
                     <p><b>Affiliated university: {this.state.school}</b></p>
                     <p><b>Office number: {this.state.num}</b></p>
                     <p><b>Wallet id: {this.state.proof}</b></p><p>&nbsp;</p>
                     <button class="logoutButton"onClick={this.logout}>Logout</button>
                
                 </div>

          <Popup
            trigger={<div className="center"><button className="editButton"> Edit </button></div>}
            modal
            closeOnDocumentClick
          >
            <h1 className="center"><b>Edit Information</b></h1>
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