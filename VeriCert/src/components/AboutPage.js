import React from 'react'



class AboutPage extends React.Component {
 

    render() {
    return (
        <div>
          
        <p>&nbsp;</p>

		<div className="title">    
          	<h1>About</h1>
        </div>
         <p>&nbsp;</p>

          <div className="about-container">

              <div className="one">

              <h1>Ethereum</h1>
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
                  <img src={require('../images/Ethereum.png')} width="45%" className="ethereum"/>
              </div>

          </div>
   
    
         

         <div className="dappContainer">
         	  <h1>Dencentralised Application</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n"}
               Pellentesque dolor odio, faucibus quis arcu non, pulvinar ultricies metus. {"\n"}
               Nullam risus nisl, vestibulum ac aliquet id, laoreet nec nibh. Maecenas luctus nec{"\n"}
               arcu interdum finibus. Pellentesque tortor turpis, {"\n"}vehicula a nisl vel, pulvinar fringilla nisi. {"\n"}
               Pellentesque roin in faucibus tellus. Nullam euismod ex neque, sed tincidunt nibh ultricies in.
               Suspendisse dignissim est non viverra vehicula. Phasellus non lorem magna.
               Nulla faucibus sagittis vehicula. Duis sit amet gravida tellus, vitae dictum ipsum.
                Ut porta turpis sem, nec volutpat nibh tristique ut. Quisque tristique justo elementum, feugiat odio in, aliquam risus.</p>
                <p>&nbsp;</p>


          	<img src={require('../images/dapp.jpeg')} width="100%"  className="dapp" />
          </div>
          <p>&nbsp;</p>

        </div>




      )
  }
}

export default AboutPage 