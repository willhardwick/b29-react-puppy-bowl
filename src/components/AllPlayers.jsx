import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchAllPlayers } from '../API/index';

const AllPlayers = () => {
    const navigate = useNavigate()
    const [players, setPlayers] = useState([])
    
    // Fetch all players
    useEffect(() => {
        const updatePlayers = async () => {
            try {
                const players = await fetchAllPlayers();
                console.log('players', players)
                setPlayers(players);
            } catch (err) {
                console.error('Error fetching players', err)
            }
        }

        updatePlayers();
    },[])


    // Render all players
    return <main> {
        players.map((player) =>  {
        return <article key={player.id}>
            <img onClick={() => navigate(`/players/${player.id}`)} 
            src={player.imageUrl}/>
            <h2>Name: {player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
        </article>
      }) 
    }    </main>
}

export default AllPlayers