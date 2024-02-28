import './App.css'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App() {
  return (
    <div id='app-container'>
      <Header />
      <NavBar id="navbar" />
      <MainContainer />
    </div>
  )
}

export default App
