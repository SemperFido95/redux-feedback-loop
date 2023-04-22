import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Reducers
const feelingRating = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = 0;
    }
    return state;
}

const contentRating = (state = 0, action) => {
    if (action.type === 'SET_CONTENT') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = 0;
    }
    return state;
}

const supportRating = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = 0;
    }
    return state;
}

const additionalComments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        state = action.payload;
    } else if (action.type === 'CLEAR_REDUCERS') {
        state = '';
    }
    return state;
}

// Store

const storeInstance = createStore(
    combineReducers(
        {
            feelingRating,
            contentRating,
            supportRating,
            additionalComments
        }
    ), 
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance} >
            <App />
        </Provider>
    </React.StrictMode>
);
