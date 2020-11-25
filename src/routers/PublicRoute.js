import React from 'react';
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = (
    {
        isAuthenticated,
        component: Component,
        ...rest //propiedas como path, exact operador rest
    }
) => {
    return (
        <Route {...rest}
            //de esta maneracomienza con el component anterior
            component={ (props) =>(
                    (!isAuthenticated) 
                            ? <Component {...props} />
                            : <Redirect to="/" />
                )
            }
            
        />
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute;
