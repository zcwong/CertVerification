import React from 'react'
import {db,auth} from '../services/firebase'
import fire from '../services/firebase'




class Profile extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
       email:"",
       fname:"",
       lname:"",
       school:"",
       proof:"",
       num:"",


      }

  
  
    } 

	componentDidMount(){
		var user = fire.auth().currentUser.email;
		//	console.log(user)

		 db.collection('school').where("Email", "==", user)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc =>{
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
            })
            
         
          })

        })
        .catch(function(error){
          console.log(error);
        })


		}




    render() {

    return (
        <div>
          
          <h1>Profile</h1>
          <p>{this.state.email}</p>
          <p>{this.state.fname}</p>
          <p>{this.state.lname}</p>
          <p>{this.state.school}</p>
          <p>{this.state.proof}</p>
          <p>{this.state.num}</p>
          
        </div>


      )
  }
}

export default Profile 