import './App.css'
import MainContainer from './components/MainContainer'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App() {
  return (
    <div id='app-container'>
      <Header />
      <NavBar className="navbar" />
      <SinglePlayer />
      <NewPlayerForm />
      <MainContainer />
    </div>
  )
}

export default App
