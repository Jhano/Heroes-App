import React from 'react';
import {mount} from 'enzyme';
import AppRouter from '../../routers/AppRouter';
import AuthContext from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de smotrar login si no esta autentificado', () =>{
        
       

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el compenete de marvel si esta autenticado', () =>{
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Alejandro'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        )
        
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })

})