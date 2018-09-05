import React, { Component } from 'react';


class DarusoNews extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <React.Fragment>
        <div className="contaner-fluid">            
        <h6 className="bolderleft"><u>DARUSONEWS</u></h6>
           <div className="row col-padding">
 
              <div className="col-container ">
              <img src={require('../image/photo-3.jpeg')} alt="" className="picture-responsive"/>
              <h4> <a href="#">MyNewWorkMac</a></h4>
              </div>

             <div className="col-container">
              <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
              <h4> <a href="#">MyNewWorkMac</a></h4>
              </div>
           
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
        
       </React.Fragment>;
    }
}
 
export default DarusoNews;