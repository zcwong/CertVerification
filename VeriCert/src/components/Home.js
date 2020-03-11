import React, { Component } from 'react';
import fire from '../services/firebase'
import Home2 from './Home2'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>



                
            </div>
        );

    }

}

export default Home;