import React from 'react';
import { Container, Row} from 'react-bootstrap';
import HeroList from '../heroes/HeroList';



const MarvelScreen = () => {
 
    return ( 
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <h1 style={{color: 'whitesmoke'}}>MarvelScreen</h1>
        
                <HeroList publisher="Marvel Comics"/>
            </Row>
        </Container>
        
     );
}
 
export default MarvelScreen;