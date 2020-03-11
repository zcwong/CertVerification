import React from 'react'
import {db,auth} from '../services/firebase'



class Profile extends React.Component {
 

	componentDidMount(){
		db.collection('school')
		 .get()
		 .then( snapshot => {
		 	console.log(snapshot)
		 })
		 .catch(error => console.log(error)
		 	)
		}



    render() {
    return (
        <div>
          
          <h1>Profile</h1>
        </div>


      )
  }
}

export default Profile 