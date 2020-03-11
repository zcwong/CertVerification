import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../services/firebase'
import {db,auth} from '../services/firebase'


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
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signup(e,firstName,lastName,school,proof,num){
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
    
          }).then(
          console.log("function executed")
          )
  }
  render() {
    return (
      <div className="col-md-6">
      <h1>Sign Up</h1>
        <form onSubmit={(event) =>{
          event.preventDefault()
          const fname = this.FnameContent.value
          const lname = this.LnameContent.value
          const school = this.SchoolContent.value
          const proof = this.ProofContent.value
          const num = this.NumContent.value 
          this.signup(event,fname, lname, school, proof, num)

        }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>


          <div className="form-group">
            <label htmlFor="InputFname">First name</label>
                  <input
                    id="FnameContent"
                    type="text"
                    ref={(input) => {this.FnameContent = input}}
                    className="form-control"
                    placeholder="Enter First name"
                    required />
          </div>

          <div className="form-group">
            <label htmlFor="InputLname">Last name</label>
                  <input
                    id="LnameContent"
                    type="text"
                    ref={(input) => {this.LnameContent = input}}
                    className="form-control"
                    placeholder="Enter Last name"
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
            <label htmlFor="InputNum">Number name</label>
                  <input
                    id="NumContent"
                    type="text"
                    ref={(input) => {this.NumContent = input}}
                    className="form-control"
                    placeholder="Enter number"
                    required />
          </div>


          
          <button type="submit" className="btn btn-primary btn-block" style={{marginLeft: '25px'}} className="btn btn-success"> SignUp </button>

        </form>
        <small> {this.state.error}</small>

      </div>


      
    );
  }
}
export default Login;