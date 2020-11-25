import React from 'react';
import '@testing-library/jest-dom'
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';

import AuthContext from '../../../auth/AuthContext';
import NavBar from '../../../components/ui/NavBar';
import { types } from '../../../types/types';



describe('Pruebas <NavBar />', () => {

    //se le manda al router y el componente cuando va a usar el useHistory
    //usa el historyMock que tiene se router
    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }
    
    const contextValue = {
        user: {
            name: 'Alejandro',
            logged: true,
        },
        dispatch: jest.fn()
    }


    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <NavBar/>
                </Router>  
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').first().text().trim()).toBe('Alejandro');
    })

    test('debe de llamar el logout y usar history', () => {

       wrapper.find('a').last().simulate('click');

       expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})
       expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
})