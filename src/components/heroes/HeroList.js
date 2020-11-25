import React, {useMemo} from 'react';
import { Container, CardColumns,  } from 'react-bootstrap';
import getHeroesByPublisher from '../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

   const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher])

    return ( 
        <Container>
            
               
                    <CardColumns className="animate__animated animate__fadeIn">
                        {
                            heroes.map(hero => (
                                
                                <HeroCard 
                                   
                                    key={hero.id}
                                    {...hero}
                                />
                                 
                            
                            ))
                        }
                    </CardColumns>
            
                
           
        </Container>
     );
}
 
export default HeroList;