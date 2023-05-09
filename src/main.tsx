import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';

import { firebaseConfig, app } from './components/FirebaseConfig';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} firebaseApp={app}>
      <App />    
    </FirebaseAppProvider>
  </React.StrictMode>,
)
