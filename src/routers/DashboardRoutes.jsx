import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DCScreen } from '../components/dc/DCScreen';
import { HeroeScreen } from '../components/heroe/HeroeScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DCScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}
