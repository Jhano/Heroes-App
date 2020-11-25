import React, { useReducer,useEffect } from 'react';
import AuthContext from './auth/AuthContext';
import authReducer from './auth/authReducer';
import AppRouter from './routers/AppRouter';

const init = () => {
    //parsea el objeto estraido
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {} , init)//reducer-initialstate-init(inicial) para el localstarage

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return ( 
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter/>   
        </AuthContext.Provider>
             
     );
}
 
export default HeroesApp;