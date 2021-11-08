import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
// import { ConnectedRouter } from 'connected-react-router';
// import { history } from './redux/configureStore';

import GlobalStyle from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <GlobalStyle> */}
      {/* <ConnectedRouter history={history}> */}
        <App />
      {/* </ConnectedRouter> */}
      {/* </GlobalStyle> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
