import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../services/firebase'
import {db,auth} from '../services/firebase'
import FileUploader from 'react-firebase-file-uploader'



class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);


    this.state = {
      email: '',
      password: '',
      error: '',
      firstName:'',
      lastName:'',
      school:'',
      proof:'',
      num:'',
      image:'',
      imageURL:'',
      progress:0,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  signup(e,firstName,lastName,school,proof,num,email){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
        this.setState({error: error.message});
      })

    db.collection('school')
          .add({
            FirstName: firstName,
            LastName:lastName,
            School:school,
            Proof:proof,
            Num:num,
            Email: email
    
          }).then(
          console.log("function executed")
          )
  }



  
  render() {
    return (
      <div className="registerForm">
      <h1 className="center">Sign Up</h1>
        <form onSubmit={(event) =>{
          event.preventDefault()
          const fname = this.FnameContent.value
          const lname = this.LnameContent.value
          const school = this.SchoolContent.value
          const proof = this.ProofContent.value
          const num = this.NumContent.value 
          const email = this.state.email
          this.signup(event,fname, lname, school, proof, num, email)

        }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
          </div>


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
            <label htmlFor="InputProof">Proof</label>
                  <input
                    id="ProofContent"
                    type="text"
                    ref={(input) => {this.ProofContent = input}}
                    className="form-control"
                    placeholder="Enter proof"
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
        <small> {this.state.error}</small>

            {"\n"}

 

          <div className="center">
            <button type="submit" className="signUpButton"> Sign Up </button>
          </div>
        </form>





      </div>


      
    );
  }
}
export default Login;