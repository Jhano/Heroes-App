import React, {useMemo} from 'react';
import { Container, Row, Col,Image,Jumbotron,ListGroup,Button  } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import getHeroesById from '../selectors/getHeroesById';

const HeroScreen = ({history}) => {

    //leyendo argumentos desde url (hook de react-router)
    const {heroeId} = useParams();
    
   const hero = useMemo( () => getHeroesById(heroeId), [heroeId]);
  


    if( !hero) {
        return <Redirect to="/"/>
    }  
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {

      
        if(history.length <= 2) {
            if(publisher.includes('Marvel')){
                history.push('/marvel');
            }else{
                history.push('/dc');
            }
            
        } else{
            history.goBack();
        }      
    }

    return ( 
        <Container>
            <Row style={{paddingTop: '30px'}} >
                <Col 
                    md="6" 
                    lg="4" 
                    style={{textAlign:'center'}}  
                    className="animate__animated animate__fadeInLeft animate__faster"
                >
                        <Image
                            src={`../assets/heroes/${heroeId}.jpg`}
                            alt={superhero}
                            rounded 
                            className="img-thumbnail"
                            style={{maxWidth:'300px'}}
                        />
                </Col>
                <Col  
                    md="6" 
                    lg="8" 
                    style={{textAlign:'center'}}
                    className="animate__animated animate__fadeInRight animate__faster"
                
                >
                    <h1 style={{color: 'white'}}>{superhero}</h1>
                    <Jumbotron>
                        <h3>Characters</h3>
                        <p><b>{characters}</b></p>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Alter ego: </b> {alter_ego} </ListGroup.Item>
                            <ListGroup.Item><b>Publisher: </b> {publisher} </ListGroup.Item>
                            <ListGroup.Item><b>First Appearance: </b> {first_appearance} </ListGroup.Item>
                        </ListGroup>
                        <Button 
                            variant="dark" 
                            size="lg" 
                            block
                            style={{borderRadius: '2rem', marginTop: '10px'}}
                            onClick={handleReturn}
                        > Return 
                        </Button>
                    </Jumbotron>
                    
                </Col>
            </Row>
        </Container>
       
     );
}
 
export default HeroScreen;