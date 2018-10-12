import React, { Component } from 'react';


class Loginin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <React.Fragment>
             {/* <nav className="navbar navbar-expand-md navbar-dark  mb-4" style= {{maxHeight:150,}}>
      <a className="navbar-brand" href="#">DARUSONEWSPAPER</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav> */}
<div className ="container login">
 <div className="row">
  <div className="col-4">

  </div>
<div className="col-6 login-container">
  <div className="form-group">
  <h4  style={{textAlign:'center'}}><u>LOGIN</u></h4>

    <input type="email" className="form-control form-control-sm"  placeholder="Enter email" />
 
 
    <input type="password" className="form-control form-control-sm" style={{marginTop:20,marginBottom:20,height:10}}  placeholder="Password" />

  <small><a href="#">Don't You have Account? Register Here</a></small>
  
  <button type="submit" className="btn btn-primary btn-sm" style={{marginLeft:70}}>Submit</button>
  </div>
  </div>
  <div className="col-4">

  </div>
</div>
</div>


        </React.Fragment>;
    }
}
 
export default Loginin;