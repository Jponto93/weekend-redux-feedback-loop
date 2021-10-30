import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// set up redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUCERS
//reducer to hold/modify contents of feedback

let template = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
};

// const feedback = (state = template, action) => {
//     // switch (action.type) {
//     //     case 'ADD_FEELING':
//     //         return action.payload
//     //     case 'ADD_UNDERSTANDING':
//     //         return action.payload
//     //     default:
//     //         return state
//     // }
// }

const feeling = (state = template, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload
        default:
            return state;
    }
}

const understanding = (state = template, action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload
        default:
            return state;
    }
}

const support = (state = template, action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        // feedback
        feeling,
        understanding,
        support
    }), applyMiddleware(
        logger
    )
);




ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
