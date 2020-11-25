import React,{useContext} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';


const LoginScreen = ({history}) => {

    const {user, dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        //history.replace('/'); //reemplaza en el historial
       
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload:  {
                name: 'Alejandro'
            }
        }) 
        
        history.replace(lastPath);
    
    }

    return ( 
            <Container  className="mt-5" >
                <Row> 
                    <Col lg="12">
                        <h1 style={{color: 'white'}}>LoginScreen</h1>
                        
                            <pre style={{color: 'white'}} >{JSON.stringify(user, null, 3)}</pre>
                          
                        <hr/>  
                    </Col> 
                    <Col xs="4" md="4" lg="2">
                        <Button 
                            variant="primary"
                            onClick={handleLogin}
                            size="lg" block
                        >
                            Login
                        </Button>
                    </Col>   
                    
                </Row>       
            </Container>
        
       
        
     );
}
 
export default LoginScreen;

