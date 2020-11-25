//Sistema de rutas principal
import React, {useContext} from 'react';
import { Row} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

import AuthContext from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return ( 
        <Router>
            <Row>   
                <Switch>         
                    <PublicRoute 
                        isAuthenticated={user.logged} 
                        exact path="/login" 
                        component={LoginScreen}
                    />                  
                    <PrivateRoute 
                        isAuthenticated={user.logged} 
                        path="/" 
                        component={DashBoardRoutes}
                    />
                </Switch>         
            </Row>
        </Router>
     );
}
 
export default AppRouter;