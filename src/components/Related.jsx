import React, { Component } from 'react';


class Related extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <React.Fragment>
        <div className="contaner">            
        <h6 className="bolderleft"><u>RELATED</u></h6>
           <div className="row col-padding">
           <div className="col-6 " className="col-pad-center">
 
              <div className="col-container ">
              <img src={require('../image/photo-3.jpeg')} alt="" className="picture-responsive"/>
              <h4> <a href="#">MyNewWorkMac</a></h4>
              </div>

             <div className="col-container">
              <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
              <h4> <a href="#">MyNewWorkMac</a></h4>
              </div>
           
            </div>
         <div className="col-6"  className="col-distance">
         <div className="col-container">
              <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
              {/* {picture} */}
              <h4> <a href="#">MyNewWorkMac</a></h4>
              </div>
           
              <div className="col-container">
              <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
              <h4> <a href="#">MyNewWorkMac</a></h4>
              </div>
           
         </div>
         
       
           </div>
           
        </div>
        
       </React.Fragment>;
    }
}
 
export default Related;