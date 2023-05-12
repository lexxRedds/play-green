import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirebaseAppProvider } from 'reactfire';

import { firebaseConfig, app } from './components/FirebaseConfig';
import App from './App.tsx';

import GlobalStyle from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} firebaseApp={app}>
      <GlobalStyle />
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
)