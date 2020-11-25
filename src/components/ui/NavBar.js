import React, {useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';




const NavBar = () => {

    //extrayendo la propuedad name y renombrandola
    const {user: {name}, dispatch} = useContext(AuthContext);
    //useHistory, hook para usar history y poder realizar la navegacion cuando es undefine en l componente
    const history = useHistory();

    const handleLogOut = () => {

        dispatch({
            type: types.logout,
        })

        history.replace('/login');
   
    }

    return ( 
        <Navbar bg="dark" expand="md" variant="dark">
            <Navbar.Brand as={Link} to="/">Asociaciones</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/marvel">Marvel</Nav.Link>
                    <Nav.Link as={NavLink} to="/dc">DC</Nav.Link>
                    <Nav.Link as={NavLink} to="/search">Buscar</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link  className="text-info">{name}</Nav.Link>
                    <Nav.Link
                        onClick={handleLogOut}
                    >
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>   
        </Navbar>
     );
}
 
export default NavBar;