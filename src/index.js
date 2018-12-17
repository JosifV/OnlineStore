import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import reducer from './store/Reducer'
import {Provider} from 'react-redux'
import TopRoute from './TopRoute'

const store = createStore(reducer)
ReactDOM.render(<Provider store={store}><BrowserRouter ><TopRoute><App/></TopRoute></BrowserRouter></Provider>, document.getElementById('root'));
serviceWorker.unregister();
