import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import HeroScreen from '../../../components/heroes/HeroScreen';




describe('Pruebas en <HeroScreen/>', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
       
    }

   

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock}/>    
            </MemoryRouter>
            
        )
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })

    test('Debe de mostara un hero si el parametro existe y se encuentra', () => {

        const wrapper = mount(
            //creo una ruta false, para poder pasar parametros
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroScreen}/>   
            </MemoryRouter>
            
        )
        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('Debe de mostara un hero si el parametro existe y se encuentra', () => {

        const wrapper = mount(
            //creo una ruta false, para poder pasar parametros
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroScreen}/>   
            </MemoryRouter>
            
        )
        expect(wrapper.find('.row').exists()).toBe(true);
    })


    test('Debe de regresar a la pantalla anterior con PUSH ', () => {
        
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }    
        const wrapper = mount(
            //creo una ruta falsa, para poder pasar parametros
            //de esta manera puedo pasarle el history para poder usarlo
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ () =>  <HeroScreen history={historyMock}  /> //cuando se redenreriza así  así, se reciben los pprops que manda el router  
            }/>    
            </MemoryRouter>
        )
        
    
        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/marvel');
        expect(historyMock.goBack).not.toHaveBeenCalled();
      
    })


    test('Debe de regresar a la pantalla anterior con GOBACK ', () => {
        
    
        const wrapper = mount(
            //creo una ruta falsa, para poder pasar parametros
            //de esta manera puedo pasarle el history para poder usarlo
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ () =>  <HeroScreen history={historyMock}  /> //cuando se redenreriza así  así, se reciben los pprops que manda el router  
            }/>    
            </MemoryRouter>
        )
        
    
        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();
      
    })

    test('Debe de llamar el rederict si el hero no existe', () => {
        
    
        const wrapper = mount(
            //creo una ruta falsa, para poder pasar parametros
            //de esta manera puedo pasarle el history para poder usarlo
            <MemoryRouter initialEntries={['/hero/marvel-spider123123213']}>
                <Route path="/hero/:heroeId" component={ () =>  <HeroScreen history={historyMock}  /> //cuando se redenreriza así  así, se reciben los pprops que manda el router  
            }/>    
            </MemoryRouter>
        )
        
        //si el hero no existe, no muestra nada
        expect(wrapper.text()).toBe('');
      
    })
})