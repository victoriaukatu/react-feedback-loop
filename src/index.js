import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';


// // const getFeeling = (state=[], action) => {
// //     if ( action.type === 'SET_FEELING') {
// //         return action.payload
// //     }
// //     return state;
// }

const reduxStore = createStore (
    combineReducers ({
        // getFeeling,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

