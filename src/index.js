import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import firebaseConfig from './firebase_config';
import "slick-carousel/slick/slick.css";
import {store,persistor} from './redux/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <PersistGate Loading={"loading"} persistor={persistor}>
   <App/>
   </PersistGate>
  </Provider>
);

