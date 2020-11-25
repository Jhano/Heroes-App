import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //propiedas como path, exact operador rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route {...rest}
            //de esta maneracomienza con el component anterior
            component={ (props) =>(
                    (isAuthenticated) 
                            ? <Component {...props} />
                            : <Redirect to="/login" />
                )
            }
            
        />
    );
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute;
