import React from 'react'
import './App.scss'
import covervid from './test.mp4';
import Navbar from './componants/Navbar/Navbar'
import DynamicText from './componants/DynamicText/DynamicText';
const App = () => {
    return (

        <div className="app bg-red">
            <Navbar />
            <div className='landing-page'>
                <div className='landing-page-first'>
                <DynamicText />
                </div>
                <video autoPlay muted  playsinline className='coverVideo'>
                    <source
                        src={covervid}
                        type='video/mp4'
                    />
                </video>
                <div className='standig'>
                </div>
            </div>
        </div>
    )
}

export default App