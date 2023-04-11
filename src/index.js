import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'modules/App';
import './index.css';
import theme from 'theme';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
