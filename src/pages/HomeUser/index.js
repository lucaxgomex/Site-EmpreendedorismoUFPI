import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
import Footer from '../../components/Footer';

import './styles.css';

function HomeUser () {
    return (
        <section id="home-user-page">
            <HeaderDashboard/>
            <div className="home-user-body">

            </div>
            <Footer/>
        </section>
        
    );
}

export default HomeUser;