import React from 'react'
import './App.scss'
import Navbar from './componants/Navbar/Navbar'
import Clients from './container/Clients/Clients'
import LandingPage from './componants/LandingPage/LandingPage'
import AboutUS from './container/AboutUS/AboutUS.jsx'
import Services from './container/Services/Services'
import PortfolioSection from './container/PortfolioSection/PortfolioSection'
import ContactUS from './container/ContactUS/ContactUS'
import Footer from './container/Footer/Footer'
import NavigationDots from './componants/NavigationDots/NavigationDots'
import MyMap from './componants/Map/MyMap'
import ErrorPage from './container/ErrorPage/ErrorPage'
const Home = () => {

    return (

        <div className="app bg-red">
            <LandingPage />
            <AboutUS/>
            <Services/>
            <Clients/>
            <PortfolioSection/>
            <ContactUS />
        </div>
    )
}

export default Home