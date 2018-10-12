import React, { Component } from 'react';
import Navbar from './header/Navbar';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import Related from './Related';
import Comment from './Comment';
class Click extends Component {


    render() { 
        return <React.Fragment>

            <div className="container-fluid">
         
            <div className="row">
            <div className="col-8">
            <div className="imgOnclick">
            <img src={require('/home/nelson/daruso-coict/src/image/photo-3.jpeg')} alt=""/>
            </div>
            <div className="container click-contain">
                <header>
              <h3><u>MYNEWSMARTPHONE</u></h3>
                </header>
                <body>
                    <p>Paragraphs are the building blocks of papers. 
                        Many students define paragraphs in terms of length:
                         a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.
                          In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
                          A paragraph is defined as “a group of sentences or a single sentence that forms a unit” 
                          (Lunsford and Connors 116). Length and appearance do not determine whether a section in a
                           paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles,
                            a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences
                             that support one main idea. In this handout, we will refer to this as the “controlling idea,” 
                             because it controls what happens in the rest of the paragraph.</p>
                </body>
            </div>
           
            <div className="jumbotron click-contain" style={{marginTop:50,}}>
            <div className="">
               <h3><u>COMMENT BELOW</u></h3>
            </div>
                 < Comment />
           </div>


            </div>
            <div className="col-4">
            <Related />
            </div>
          </div>
         </div>
        </React.Fragment>;
    }
}
 
export default Click;