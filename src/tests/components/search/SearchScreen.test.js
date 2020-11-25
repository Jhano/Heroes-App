import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import SearchScreen from '../../../components/search/SearchScreen';



describe('Pruebas en <SearchScreen/>', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount (
            //creo la Route porque se necesita estar evaluando en una ruta en particular
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    })

    test('debe de mostrarse a batman y el input con el valor del queryString', () => {

        const wrapper = mount (
            //creo la Route porque se necesita estar evaluando en una ruta en particular
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar un error si no se encuentra el hero', () => {

        const busqueda = 'batman123123';

        const wrapper = mount (
            //creo la Route porque se necesita estar evaluando en una ruta en particular
            <MemoryRouter initialEntries={[`/search?q=${busqueda}`]}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        )
        
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There is no a hero with ${busqueda}`);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar el push del history', () => {

    

        const historyMock = {
            push: jest.fn(),
        }

        const wrapper = mount (
            //creo la Route porque se necesita estar evaluando en una ruta en particular
            <MemoryRouter initialEntries={[`/search?q=batman`]}>
                <Route path="/search" component={() => <SearchScreen 
                                                        history={historyMock}
                                                        /> }/>
            </MemoryRouter>
        )
        
        wrapper.find('input').simulate('change', {
            target: {
                name:'searchText',
                value:'batman'
            }
        })

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`)
    })
})