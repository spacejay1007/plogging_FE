import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";

import GlobalStyle from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <GlobalStyle> */}
        <App />
      {/* </GlobalStyle> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
