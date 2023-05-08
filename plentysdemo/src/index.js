import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {legacy_createStore as createStore} from 'redux'
import allReducers from './state/Reducers/allReducer';
import { persistStore,persistReducer } from 'redux-persist';
import storage from'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';



const Config = {
  key: 'root',
  storage,
  blacklist: [''] ,// pass the reducers thats are zero while refreshed
  whitelist:['productIncrementReducer'] // pass the reducers that states are not become zero while refreshed  
};

const persistedReducer = persistReducer(Config, allReducers);


const container = document.getElementById('root');
const root = createRoot(container);




const store = createStore(
  persistedReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


const persistor = persistStore(store);
// store.subscribe(()=>{
//   localStorage.setItem('parseData', JSON.stringify(store.getState()))
// // })

// console.log(store)




root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<App />}></Route>
    </Routes>
    
    </BrowserRouter> 
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
