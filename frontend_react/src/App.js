import React from 'react'
import './App.scss'
import Navbar from './componants/Navbar/Navbar'
import LandingPage from './componants/LandingPage/LandingPage'
import AboutUS from './componants/AboutUS/AboutUS'
const App = () => {
    return (

        <div className="app bg-red">
            <Navbar />
            <LandingPage />
            <AboutUS/>
        </div>
    )
}

export default App