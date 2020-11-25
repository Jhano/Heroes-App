import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeroList from '../heroes/HeroList';


const DcScreen = () => {
    return ( 
        <Container >
             <Row style={{ justifyContent: 'center' }}>
                <h1 style={{color: 'whitesmoke'}}>DcScreen</h1>
                
                <HeroList  publisher="DC Comics"/>
             </Row>
        </Container>
       
      
     );
}
 
export default DcScreen;