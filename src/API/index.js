import axios from "axios"

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/willhardwick/players'

const fetchAllPlayers = async () => {
    const { data } = await axios.get(BASE_URL)
    return data.data.players
}

export default fetchAllPlayers




// try {
//     const response = await fetch(APIURL)
//     const data = await response.json();
//     return data
// } catch (err) {
//     console.error('Error fetching players', err)
// }