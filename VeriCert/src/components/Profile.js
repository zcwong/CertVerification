import React from 'react'
import {db,auth} from '../services/firebase'
import fire from '../services/firebase'




class Profile extends React.Component {

    logout() {
        fire.auth().signOut();
    }
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
        this.logout = this.logout.bind(this);


  
  
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

        <div className="profileContainer">
          
          <h1 className="center">Profile</h1>
          <p>Email: {this.state.email}</p>
          <p>First name: {this.state.fname}</p>
          <p>Last name: {this.state.lname}</p>
          <p>Affiliated university: {this.state.school}</p>
          <p>Office number: {this.state.num}</p>
          <p>Wallet id: {this.state.proof}</p>
          <button onClick={this.logout}>Logout</button>







        </div>





      )
  }
}

export default Profile 