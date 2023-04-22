import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Reducers
const feelingToday = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        state = action.payload;
    }
    return state;
}

const contentRating = (state = 0, action) => {
    if (action.type === 'SET_CONTENT') {
        state = action.payload;
    }
    return state;
}

// Store

const storeInstance = createStore(
    combineReducers(
        {
            feelingToday,
            contentRating,
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
