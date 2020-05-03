import React from 'react'
import {db,auth} from '../services/firebase'
import fire from '../services/firebase'


class ResultCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        school:"",
        walletId:"",
        verified:null,
        msg:""
        
      }
    this.querySchool = this.querySchool.bind(this)
    this.verifySchool = this.verifySchool.bind(this)

    }



    componentDidMount(){
      const id = this.props.resultId
    
    }


    //to search if school name exists in database with the entered id
    querySchool(id){
        db.collection('school').where("Proof", "==", id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc =>{
            var school = doc.data().School

            this.setState({
              school:school,
              verified:true,

            })
            
         
          })
          
        })
        .catch(function(error){
          console.log(error);
        })
      
    }

    //return specific result depend on verified state
    verifySchool(id){
      
      if(this.state.verified){
        return <b>{this.state.school}</b>
         
      }else{
       return <b>Warning! Wallet ID is not verified</b>
        
      }

    }




    render() {

        const id = this.props.resultId-1;


        return (
        <div>

               {this.querySchool(this.props.certs[id].author)}
               <p>Wallet account belongs to: {this.verifySchool(this.props.certs[id].author)}</p>
               
              
              <div className="cert">


                <div className="certInner">
                     <span className="certTitle">Officially Verified!</span> {"\n"}
                     <img src={require('../images/verified.png')} width="100px" height="100px"/>{"\n"}
                     <span className="certContent"><i>This is to certify that</i></span>{"\n"}
                     <span className="certContent"><b>{this.props.certs[id].name}</b></span>{"\n"}
                     <span className="certContent"><i>has completed the course</i></span>{"\n"}
                     <span className="certContent"><b>{this.props.certs[id].course}</b></span> {"\n"}
                     <span className="certContent">with score of <b>{this.props.certs[id].result}</b></span>{"\n"}{"\n"}
                     <span className="certContent">Validated on:<b> {this.props.certs[id].issueDate}</b> </span>{"\n"}{"\n"}
                     <span className="certContent">Validated by wallet id: </span>{"\n"}
                     <span className="certContent"><b>{this.props.certs[id].author} </b> </span>{"\n"}

                  



                </div>
               





              </div>

          
        </div>
      )
    }
} 


export default ResultCard