import React from 'react'
import './App.scss'
import Navbar from './componants/Navbar/Navbar'
const App = () => {
    return (

        <div className="app bg-red">
            <Navbar className="app__primarybg "/>
            <img className='imgtest' src="./asseets/images/logo.png" ></img>
        </div>
    )
}

export default App