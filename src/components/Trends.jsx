import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Trends extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    
    render() { 
        // let names = [ 'photo-1', 'photo-2', 'photo-3', 'photo-4', 'photo-5' ];

        // let picture =   names.map(image => {
        //     return <img key={image} src={require(`../image/${image}.jpeg`)} alt="" className="img-responsive" />
        //  });
 
        return <React.Fragment>
         <div className="contaner">            
         <h6 className="bolderleft"><u>TRENDS</u></h6>
            <div className="row col-padding">
  
               <div className="col-container" >
               <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
               <h4> <Link to="/Click">MyNewWorkMac</Link></h4>
               </div>

              <div className="col-container">
               <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
               <h4> <Link to="/Click">MyNewWorkMac</Link></h4>
             </div>
             <div className="col-container">
               <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
               {/* {picture} */}
               <h4> <Link to="/Click">MyNewWorkMac</Link></h4>
               </div>
            
               <div className="col-container">
               <img src={require('../image/photo-2.jpeg')} alt="" className="picture-responsive"/>
               <h4> <Link to="/Click">MyNewWorkMac</Link></h4>
               </div>
            
          
          
        
            </div>
            
         </div>
         
        </React.Fragment>;
    }
}

export default Trends;
 