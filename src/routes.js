import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import PasswordRecovery from './pages/LoginPage/PasswordRecovery';
import RegisterPage from './pages/RegisterPage';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';
import CreateArticle from './pages/CreateArticle';
import Error404 from './pages/Error404';
import CreateNews from './pages/CreateNews';
import ArticlePreviewPage from './pages/ArticlePreviewPage';
import ProfileEditPage from './pages/ProfileEditPage';
import HomeUser from './pages/HomeUser';
import PasswordChangePage from './pages/PasswordChangePage';
import LinkTreePage  from './pages/LinkTreePage';

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
                <Route path='/recuperar-senha' component={PasswordRecovery}/>
                <Route path='/cadastro' component={RegisterPage}/>
                <Route path='/admin' component={AdminPanel}/>
                <Route path='/usuario' component={UserPanel}/>
                <Route path='/editar-perfil' component={ProfileEditPage}/>
                <Route path='/alterar-senha' component={PasswordChangePage}/>
                <Route path='/create-article' component={CreateArticle}/>
                <Route path='/article-preview' component={ArticlePreviewPage}/>
                <Route path='/news' component={CreateNews}/>
                <Route path='/homeUser' component={HomeUser}/>
                <Route path='/link-tree' component={LinkTreePage}/>
                <Route path='*' component={Error404}/>
            </Switch>
        </BrowserRouter>
    )
};
