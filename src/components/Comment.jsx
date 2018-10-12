import React, { Component } from 'react';



class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text:"",
            txtInput:[]
         }
    }
    render() {
        const { text } = this.state;
        const enabled =
              text.length > 0 
            ; 
        return <React.Fragment>
              <input  className="form-control  mr-l-2 p-3" onChange={this.handleInputChange} placeholder="Add Comment" aria-label="Search" value={this.state.text}/>

               <button onClick={this.listUpdates} disabled={!enabled} className= "btn btn-outline-primary m-2 " type="submit">Comment</button>

 {   this.state.txtInput.map((v) => {
          return <div  style={{width:750, height:'auto'}}>
              <ul className="list-group list-group-flush m-2">
              <li className ="list-group-item">
              {v}
              </li>
    
              </ul>
                </div>})}
        </React.Fragment>;
    }

    handleInputChange = (evt) => {
        this.setState({ text: evt.target.value });

      }

      listUpdates =()=> {
   

        this.state.txtInput.push(this.state.text);

        this.setState(this.state);        
        this.setState({ value1: this.state.value1+1});

       }


}
 
export default Comment;