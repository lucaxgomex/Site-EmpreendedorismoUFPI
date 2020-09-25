import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/sobre' component={AboutUsPage}/>
                <Route path='/contato' component={ContactPage}/>
                <Route path='/servicos' component={ServicesPage}/>
                <Route path='/eventos' component={EventsPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/cadastro' component={RegisterPage}/>
                <Route path='/admin' component={AdminPanel}/>
                <Route path='/usuario' component={UserPanel}/>
            </Switch>
        </BrowserRouter>
    )
};
