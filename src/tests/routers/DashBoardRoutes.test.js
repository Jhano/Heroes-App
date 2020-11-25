import React from 'react';
import '@testing-library/jest-dom'
import { mount } from 'enzyme';
import DashBoardRoutes from '../../routers/DashBoardRoutes';
import AuthContext from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashBoardRoutes />', () => {

    const contextValue = {
        user: {
            name: 'Alejandro',
            logged: true,
        },
        dispatch: jest.fn()
    }

    test('El componente se muestra correctamente', () => {

             const wrapper = mount( 
                    <AuthContext.Provider value={contextValue}>
                        <MemoryRouter>
                            <DashBoardRoutes />
                        </MemoryRouter>
                    </AuthContext.Provider>
                 );
       
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').first().text().trim()).toBe('Alejandro');
    })
})