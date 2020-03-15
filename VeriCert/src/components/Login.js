import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../services/firebase'
import auth from "./Auth/Auth.js"


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      error:''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
     
    }).catch((error) => {
       
      this.setState({error: error.message});
    
      });
  }

  
  render() {
    return (
      <div className="col-md-6">
      <h1>LOGIN</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>

        </form>
          <small> {this.state.error}</small>
      </div>


      
    );
  }
}
export default Login;