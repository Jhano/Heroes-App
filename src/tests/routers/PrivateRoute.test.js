import { mount } from 'enzyme';
import React from 'react';
import PrivateRoute from '../../routers/PrivateRoute';
import '@testing-library/jest-dom';

 //high order component creado para generar pruebas de router con ciertas rutas
//falicita para falsear informacion de diferentes rutas para poder evaluarlas
//manejar link, navlink.. etc
import {MemoryRouter} from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {

      //preveer un nuevo argumneto al PrivateRoute 
      //esto vendria siendo el rest y es para que el componente pueda usar locaction.pathname
      const props = {
          location: {
              pathname: '/marvel'
          }
      }
    //buscando el storage y simulando con jest
    Storage.prototype.setItem = jest.fn()

    test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {

        const wrapper = mount(
           
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
            
        )
        console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
        
    })

    test(' debe de bloquear el componente si no esta autenticado',  () => {
        const wrapper = mount(
           
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
            
        )
        expect(wrapper.find('span').exists()).toBe(false);
    })
})