import '@testing-library/jest-dom';
import authReducer from '../../auth/authReducer';
import { types } from '../../types/types';


const demoState = {
    name: 'Alejandro',
    logged: true
}

describe('Pruebas en authReducer', () => {

    test('debe de retonar el estado por defecto', () => {
        const state = authReducer(demoState, {});

        expect(state).toEqual(demoState);
    })

    test('debe de autenticar y colocar el name del usuario', () => {

        const state = authReducer({}, {
            type: types.login,
            payload: {
                name: 'Alejandro'
            }
        });

        expect(state).toEqual(demoState);

    })

    test('debe de borrar el name del usuario y logged en false', () => {

        const state = authReducer(demoState, {
            type: types.logout
        });

        expect(state.logged).toBe(false);
        expect(state.name).toBe(undefined);


    })
})