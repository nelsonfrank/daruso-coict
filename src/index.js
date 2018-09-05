import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import '/home/nelson/daruso-coict/node_modules/bootstrap/dist/css/bootstrap.css '
import App from './App';
import Click from './components/Click';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
