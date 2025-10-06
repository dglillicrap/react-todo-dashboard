import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import App from './App';
import MsalGuard from './components/MsalGuard';
import msalConfig from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      {/* Keep App behind the guard */}
      <MsalGuard>
        <App />
      </MsalGuard>
    </MsalProvider>
  </React.StrictMode>
);