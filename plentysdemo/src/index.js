import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {legacy_createStore as createStore} from 'redux'
import allReducers from './state/Reducers/allReducer';
const container = document.getElementById('root');
const root = createRoot(container);

const persistedState = localStorage.getItem('parsData') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}




const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
store.subscribe(()=>{
  localStorage.setItem('parseData', JSON.stringify(store.getState()))
})





root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<App />}></Route>
    </Routes>
    
    </BrowserRouter> 
     
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
