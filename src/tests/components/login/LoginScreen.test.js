import React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/login/LoginScreen';
import AuthContext from '../../../auth/AuthContext';
import { types } from '../../../types/types';



describe('Pruebas en <LoginScreen />', () => {

    
    const historyMock = {
        replace: jest.fn(),      
    }

    const contextValue = {
        user: {
            logged: false
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
             <LoginScreen history={historyMock} />
        </AuthContext.Provider>
       
    )

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de realizar el dispatch y la navegacion', () => {

        const handleCLick = wrapper.find('button').prop('onClick');

        handleCLick();
        expect(contextValue.dispatch).toHaveBeenCalledWith(
                        {
                            type: types.login,
                            payload:  {
                            name: 'Alejandro'
                            }
                        }
                    );
        
         expect(historyMock.replace).toHaveBeenCalledWith('/');

         localStorage.setItem('lastPath', "/dc")   
         handleCLick();    
         expect(historyMock.replace).toHaveBeenCalledWith('/dc');
                                        
    })
})