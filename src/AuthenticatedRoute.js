import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const storage = window.localStorage;

const AuthenticatedRoute = ({component: Component,  ...rest}) => (
    <Route
    {...rest}
    render={(props) =>
        storage.getItem('user') ? (
                <Component {...props} user={storage.getItem('user')} />
        ) : (
                <Redirect to="/" />
            )}
    />
  );
  
  export default AuthenticatedRoute;