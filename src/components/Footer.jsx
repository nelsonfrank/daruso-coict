import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <React.Fragment>
            <div className="container-fluid">
       <div className="jumbotron bg-black">
          <div>&copyright 2018-2019</div>
       </div>
       </div>

        </React.Fragment>;
    }
}
 
export default Footer;