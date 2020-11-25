//Sistema de rutas principal
import React from 'react';
import { Col } from 'react-bootstrap';
import {
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";

import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import NavBar from '../components/ui/NavBar';

import './DashBoardRoutes.css';

const DashBoardRoutes = () => {
    return (
            <>
                
                <Col lg="12">
                    <NavBar/> 
                </Col> 
                <Col 
                    lg="12" 
                    className='fondo'
                > 
                    <Switch>
                        <Route exact path="/marvel" component={MarvelScreen}/>
                        <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                        <Route exact path="/dc" component={DcScreen}/>
                        <Route exact path="/search" component={SearchScreen}/>

                        <Redirect to="/marvel"/>
                    </Switch>
                </Col>
               
            </>
        
     );
}
 
export default DashBoardRoutes;