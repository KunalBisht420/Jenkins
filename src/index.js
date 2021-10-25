import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux';
import { createStore } from 'redux'


const actionTypes = {
  VIEW_ALGO: "VIEW_ALGO",
  ADD_ITEM: "ADD_ITEM",
  REM_ITEM: "REM_ITEM"
}


const iniState = {
  bots: [

    {
      "id": 1,
      "bot": "Hot Bot",
      "description": "Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index": 289.34,
      "cagr": 34,
      "itemCount": 0

    },
    {
      "id": 2,
      "bot": "Cool Bot",
      "description": "Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index": 439.34,
      "cagr": 28,
      "itemCount": 0

    },
    {
      "id": 3,
      "bot": "Options Bot",
      "description": "Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index": 139.34,
      "cagr": 42,
      "itemCount": 0

    }

  ],
  currentBot: null
}

const botsReducer = (state = iniState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_ALGO:
      return {
        ...state,
        currentBot: action.payload
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        itemCount: action.payload.itemCount++
      };
    case actionTypes.REM_ITEM:
      return {
        ...state,
        itemCount: action.payload.itemCount--
      };
    default:
      return state
  }
};

export const viewAlgo = (item) => {
  return {
    type: actionTypes.VIEW_ALGO,
    payload: item
  };
}

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  }
}

export const remItem = (item) => {
  return {
    type: actionTypes.REM_ITEM,
    payload: item
  }
}

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export const increaseCount = () => {
  return {
    type: "INCREMENT",
  };
}


export const decreaseCount = () => {
  return {
    type: "DECREMENT",
  };
}

const rootReducer = combineReducers({
  bots: botsReducer,
  counts: countReducer
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
