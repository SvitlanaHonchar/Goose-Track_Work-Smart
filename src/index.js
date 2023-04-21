import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'modules/App';
import './index.css';
import { theme, darkTheme } from 'shared/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const themeMode = 'light';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider theme={themeMode === 'light' ? theme : darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
  // </React.StrictMode>
);
