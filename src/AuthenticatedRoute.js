import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const storage = window.localStorage;

const AuthenticatedRoute = ({component: Component,  ...rest}) => (
    <Route
    {...rest}
    render={(props) =>
        storage.getItem('user') ? (
                <Component {...props} />
        ) : (
                <Redirect to="/balance" />
            )}
    />
  );
  
  export default AuthenticatedRoute;