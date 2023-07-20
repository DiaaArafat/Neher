import React from 'react'
import './App.scss'
import Navbar from './componants/Navbar/Navbar'
import Clients from './container/Clients/Clients'
import LandingPage from './componants/LandingPage/LandingPage'
import AboutUS from './container/AboutUS/AboutUS.jsx'
import Services from './container/Services/Services'
const App = () => {

    return (

        <div className="app bg-red">
            <Navbar />
            <LandingPage />
            <AboutUS/>
            <Services/>
            <Clients/>
        </div>
    )
}

export default App