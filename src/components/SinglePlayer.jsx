import React from 'react';
import { useParams } from 'react-router-dom'; // gets playerId out of API
import { useState, useEffect } from 'react';
import { getSinglePlayer } from '../API';

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        async function updateNewPlayer() {
            try {
                const player = await getSinglePlayer(id)
                setPlayer(player)

            } catch (err) {
                console.error(err)
            }
        }
        updateNewPlayer();
    })
    
    if (!player) {
        return <div>Loading player {id} . . .</div>
    }

    return (

        <article key={player.id}>
            <img onClick={() => navigate(`/players/${player.id}`)} 
            src={player.imageUrl}/>
            <h2>Name: {player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
        </article>
            

)

}

export default SinglePlayer