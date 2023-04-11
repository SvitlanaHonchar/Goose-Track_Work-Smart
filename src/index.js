import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'modules/App';
import './index.css';
// -------------------повернути коли буде store-------------------
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // -------------------повернути коли буде store------------------- */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    {/* </PersistGate> */}
  </React.StrictMode>
);
