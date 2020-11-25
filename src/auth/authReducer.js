import { types } from "../types/types";

// const state = {
//     name: 'Alejandro',
//     logged: true
// }

const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            console.log("ENTRAS IN")
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            console.log("ENTRAS OUT")
            return {

                logged: false
            }

        default:
            console.log("Default")
            return state;
    }
}


export default authReducer;