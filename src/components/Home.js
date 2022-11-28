import '../App.css'
import '../styles/Home.css'
import { useHistory } from 'react-router-dom'

function Home () {
  const history = useHistory()
  const handleNav = () => {
    history.push('/new-document')
  }
  return (
    <div className='home'>
      <header className='home-header'>
        <h1>Google Docs App</h1>
        <button onClick={handleNav} className='btn-primary btn-lg'>Get Started</button>
      </header>
    </div>
  )
}

export default Home
