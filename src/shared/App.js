import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// ConnectedRouter가 작동하지 않아 일시적으로 BrowserRouter 사용
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

//pages
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={SignUp} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
