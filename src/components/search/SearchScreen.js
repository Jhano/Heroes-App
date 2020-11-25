import React, { useMemo } from 'react';
import  queryString from 'query-string';
import { Form, FormControl, Button, Container, Col,Row, Alert  } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import getHeroesByName from '../selectors/getHeroesByName';


const SearchScreen = ({history}) => {

    //hook para ver la location y para ver las query.
    const location = useLocation();

    //puedo separar todos los querys que mande en el url
    
    const {q = ''} = queryString.parse(location.search); //si q es undefind, se le asigna un string vacio
    
    const [formValues, handleInputChange] =  useForm({
        searchText: q //de esta manera si actualizao la pag el searchText queda con el query de la url
    })

    
    const {searchText} = formValues;

    const heroesFiltered =  useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return ( 
        <Container  style={{marginTop: '20px'}}>
            <Row>
                
                <Col md="4" lg="4">
                    <h1 style={{color: 'white'}}>Search Form</h1>
                    <hr style={{background: 'white'}}/>
                    <Form      
                    style={{justifyContent: 'center'}}
                    onSubmit={handleSubmit}
                    >
                                <Row>
                                    <Col md="12" lg="12">  
                                        <FormControl 
                                            type="text" 
                                            name="searchText"
                                            placeholder="Search"
                                            value={searchText}
                                            style={{ 
                                                    marginBottom:'10px',
                                                }}  
                                            onChange={handleInputChange}           
                                        />
                                    </Col>
                                    <Col md="12" lg="12">
                                        <Button type="submit" 
                                                variant="success"
                                                style={{
                                                        marginBottom:'10px',
                                                        }}
                                                block
                                                
                                        >
                                            Search
                                        </Button>
                                    </Col>
                                    
                                    
                                </Row>
                                
                        </Form>
                    </Col>
                <Col md="8" lg="8">
                <h1 style={{color: 'white'}}>Result</h1>
                <hr style={{background: 'white'}}/>
                        <Row>
                            {
                                (q === '') 
                                    &&
                                    <Col>
                                        <Alert 
                                            variant="info"
                                            style={{textAlign:'center'}}
                                            className="animate__animated animate__fadeIn"
                                        >
                                            Search a hero
                                        </Alert>
                                    </Col>
                                    
                            }

                            {
                                (q !=='' && heroesFiltered.length === 0) 
                                    &&
                                    <Col>
                                        <Alert 
                                            variant="danger"
                                            style={{textAlign:'center'}}
                                            className="animate__animated animate__fadeIn"
                                        >
                                            There is no a hero with {q}
                                        </Alert>
                                    </Col>
                                    
                            }

                            { 
                                heroesFiltered.map(hero => (
                                        <Col 
                                            md="4" 
                                            key={hero.id}
                                            style={{marginBottom:'10px'}}
                                            className="animate__animated animate__fadeIn"   
                                        >
                                        <HeroCard 
                                            
                                            key={hero.id}
                                            {...hero}
                                            className="animate__animated animate__fadeIn"   
                                        />
                                        </Col>
                                ))    
                            }
                         </Row>
                        
                </Col>

            </Row>
            
            
        </Container>
        
     );
}
 
export default SearchScreen;