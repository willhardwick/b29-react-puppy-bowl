import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import fetchAllPlayers from '../API/index';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]) // if you do null, you can add a loading screen
    console.log(players)
    
    // Fetch all players
    useEffect(() => {
        const updatePlayers = async () => {
            try {
                const players = await fetchAllPlayers();
                console.log('players', players)
                setPlayers(players);
            } catch (err) {
                console.error('Error fetching players', error)
            }
        }

        updatePlayers();
    },[])


    
    return (
    <div>
        <h1>All players</h1>
        {/* Render all players */}
        <ul>
            {players.map(player =>  (
                <li key={player.id}>
                    <img src={player.imageUrl}/>
                    <h2>Name: {player.name}</h2>
                    <p>Breed: {player.breed}</p>
                    <p>Status: {player.status}</p>
                    <button>See details</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default AllPlayers