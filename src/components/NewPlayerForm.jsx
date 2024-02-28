import React, { useState } from 'react';

const NewPlayerForm = () => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [image, setImage] = useState('')

    async function handleSubmit(evt) {
        evt.preventDefault();
        const playerObject = {
            name: name,
            breed: breed,
            imageUrl: image,

        }
        await addPlayer(playerObject)
    }
    
    return <form onSubmit={handleSubmit}>
            <div>
                <h1>Add Player</h1>
            </div>
            <div>
            <label>Name</label>
                <input name="name" value={name} onChange={(evt) => setName(evt.target.value)}></input>
            </div>
            <label>Breed</label>
            <input name="breed" value={breed} onChange={(evt) => setBreed(evt.target.value)}></input>
            <div>
            <label>Image URL</label>
            <input name="image" value={image} onChange={(evt) => setImage(evt.target.value)}></input>
            </div>
            <input type="submit" />
        </form>
}

export default NewPlayerForm