import './App.css'
import AllPlayers from './components/AllPlayers'
import MainContainer from './components/MainContainer'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App() {
  return (
    <div id='app-container'>
      <Header />
      <NavBar />
      <MainContainer />
      <NewPlayerForm />
      <AllPlayers />
      <SinglePlayer />
    </div>
  )
}

export default App
