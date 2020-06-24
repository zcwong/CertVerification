import React from 'react'
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import auth from "./Auth/Auth.js"



export const ProtectedRoute = ({ component: Component, ...rest}) =>{
	return(
		<Route {...rest} 
		render={
			(props) => {
				if(auth.isAuthenticated()){
					return <Component {...props} />
				}else{
					return <Redirect to={
						{
						pathname:"/",
						state:props.location
						}
					} />
				}

				
			}
		}/>

	)
}