import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';



ReactDOM.render(
    <React.StrictMode>
        <HashRouter>  
        <App />
        </HashRouter>
    </React.StrictMode>

    , document.getElementById('root')
)