import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';

//pages
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Posting from '../pages/Posting';
import Reviews from '../pages/Reviews';
import ReviewDetails from '../pages/ReviewDetails';
import ReviewWrite from '../components/Reviews/ReviewWrite';

import { userCreators } from '../redux/modules/user';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userCreators.loginMiddleware());
  });
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/posting" exact component={Posting} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/review" exact component={Reviews} />
        <Route path="/reviewWrite" exact component={ReviewWrite} />
        <Route path="/review/:reviewId" exact component={ReviewDetails} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
