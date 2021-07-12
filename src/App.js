import React from 'react';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import HttpsRedirect from 'react-https-redirect';
 
function App() {
  const history = createBrowserHistory();

  const onRedirectCallback = (appState) => {
    history.replace(appState?.returnTo || window.location.pathname);
  };
  return (
    <HttpsRedirect>
    <Routes history={history}
    />
    </HttpsRedirect>
  );
}

export default App;
