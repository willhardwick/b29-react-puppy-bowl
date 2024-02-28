import React, { useState } from 'react';
import { addPlayer } from '../API';
import { useNavigate } from 'react-router-dom';

const NewPlayerForm = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')

    async function handleSubmit(evt) {
        evt.preventDefault();

        const playerObject = {
            name: name,
            breed: breed,
            status: status,
            imageUrl: image,

        }
        await addPlayer(playerObject)
        navigate('/')
    }
    
    return <form onSubmit={handleSubmit}>
            <div>
                <h1>Add player</h1>
            </div>
            <div>
                <label>Name</label>
                <input name="name" value={name} onChange={(evt) => setName(evt.target.value)}></input>
            </div>
            <div>
                <label>Breed</label>
                <input name="breed" value={breed} onChange={(evt) => setBreed(evt.target.value)}></input>
            </div>
            <div>
                <label>Status</label>
                <input name="status" value={status} onChange={(evt) => setStatus(evt.target.value)}></input>
            </div>
            <div>
                <label>Image URL</label>
                <input name="image" value={image} onChange={(evt) => setImage(evt.target.value)}></input>
            </div>
            <input type="submit" />
        </form>
}

export default NewPlayerForm