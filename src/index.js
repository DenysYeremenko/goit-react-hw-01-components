import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './components/GlobalStyles'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
      <ThemeProvider theme={theme}> 
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
