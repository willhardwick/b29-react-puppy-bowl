import React from 'react';
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';
import { Routes, Route } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div id="main-container">
            <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path='/players/:id' element ={<SinglePlayer />} />
            </Routes>
        </div>
    )
}

export default MainContainer