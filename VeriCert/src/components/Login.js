import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../services/firebase'



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


  //detech changes in form field and update state
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  //login authentication
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
     
    }).catch((error) => {
       
      this.setState({error: error.message});
    
      });
  }

  
  render() {
    return (
      <div className="loginForm">
      <h1 className="center"><b>LOGIN</b></h1>
      <div className="center">
        <img src={require('../images/user.png')} width="20%"/>
      </div>
      {"\n"}

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
          <small> {this.state.error}</small>
           {"\n"}{"\n"}

           <div className="center">   
              <button type="submit" onClick={this.login} className="loginButton">Login</button>
           </div>
        </form>
          
      </div>


      
    );
  }
}
export default Login;