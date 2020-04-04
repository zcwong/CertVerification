import React, { Component } from 'react';
import fire from '../services/firebase'
import Home2 from './Home2'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <div className="background">
                    <img src={require('../images/background - Copy.png')} width="100%" height="100%"/>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <div className="container-home">

                    <div className="one">

                    <h1>Fake Certification on the Rise</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n"}
                    Pellentesque dolor odio, faucibus quis arcu non, pulvinar ultricies metus. {"\n"}
                    Nullam risus nisl, vestibulum ac aliquet id, laoreet nec nibh. Maecenas luctus nec{"\n"}
                    arcu interdum finibus. Pellentesque tortor turpis, {"\n"}vehicula a nisl vel, pulvinar fringilla nisi. {"\n"}
                    Pellentesque roin in faucibus tellus. Nullam euismod ex neque, sed tincidunt nibh ultricies in.
                    Suspendisse dignissim est non viverra vehicula. Phasellus non lorem magna.
                    Nulla faucibus sagittis vehicula. Duis sit amet gravida tellus, vitae dictum ipsum.
                     Ut porta turpis sem, nec volutpat nibh tristique ut. Quisque tristique justo elementum, feugiat odio in, aliquam risus.</p>

                    </div>
                    <div className="two">                    
                        <img src={require('../images/bcImg.png')} width="50%"/>
                    </div>

                </div>

                <div className="container-home">
                    <div className="one">                    
                        <img src={require('../images/bcImg.png')} width="85%"/>
                    </div>

                    <div className="two">

                    <h1>Fake Certification on the Rise</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n"}
                    Pellentesque dolor odio, faucibus quis arcu non, pulvinar ultricies metus. {"\n"}
                    Nullam risus nisl, vestibulum ac aliquet id, laoreet nec nibh. Maecenas luctus nec{"\n"}
                    arcu interdum finibus. Pellentesque tortor turpis, {"\n"}vehicula a nisl vel, pulvinar fringilla nisi. {"\n"}
                    Pellentesque roin in faucibus tellus. Nullam euismod ex neque, sed tincidunt nibh ultricies in.
                    Suspendisse dignissim est non viverra vehicula. Phasellus non lorem magna.
                    Nulla faucibus sagittis vehicula. Duis sit amet gravida tellus, vitae dictum ipsum.
                     Ut porta turpis sem, nec volutpat nibh tristique ut. Quisque tristique justo elementum, feugiat odio in, aliquam risus.</p>

                    </div>
                    

                </div>


                <div className="container-home">

                    <div className="one">

                    <h1>Fake Certification on the Rise</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n"}
                    Pellentesque dolor odio, faucibus quis arcu non, pulvinar ultricies metus. {"\n"}
                    Nullam risus nisl, vestibulum ac aliquet id, laoreet nec nibh. Maecenas luctus nec{"\n"}
                    arcu interdum finibus. Pellentesque tortor turpis, {"\n"}vehicula a nisl vel, pulvinar fringilla nisi. {"\n"}
                    Pellentesque roin in faucibus tellus. Nullam euismod ex neque, sed tincidunt nibh ultricies in.
                    Suspendisse dignissim est non viverra vehicula. Phasellus non lorem magna.
                    Nulla faucibus sagittis vehicula. Duis sit amet gravida tellus, vitae dictum ipsum.
                     Ut porta turpis sem, nec volutpat nibh tristique ut. Quisque tristique justo elementum, feugiat odio in, aliquam risus.</p>

                    </div>
                    <div className="two">                    
                        <img src={require('../images/bcImg.png')} width="50%"/>
                    </div>

                </div>
                   
                
            </div>
        );

    }

}

export default Home;