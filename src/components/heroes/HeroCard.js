import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
 }) => {


    
    return ( 
       
           
        <Card >
            
            <Card.Img 
                variant="top" 
                src={`./assets/heroes/${id}.jpg`} 
                style={{ height:'16rem' }}
            />
            <Card.Body>
                <Card.Title>
                    {superhero}
                </Card.Title>
                <hr/>
                <Card.Text>
                   {alter_ego}
                </Card.Text>
                {
                    (alter_ego !== characters)
                    && <Card.Text> {characters} </Card.Text>
                }
                <Card.Subtitle> {first_appearance} </Card.Subtitle>
            </Card.Body>
            <Card.Footer >
                <Link to={`./hero/${id}`}>
                    <Button 
                        variant="info" 
                        size="lg" 
                        block
                        style={{borderRadius: '2rem'}}
                    > Más.. 
                    </Button>
                </Link>
            </Card.Footer>
        </Card>
            
        
     );
}
 
export default HeroCard;