import { useState } from 'react'
import '../styles/Navbar.css'
import { useParams } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function Navbar () {
  const [url, setUrl] = useState('')
  const [copy, setCopy] = useState(false)
  const { id } = useParams()
  const handleShare = (e) => {
    e.preventDefault()
    setUrl(`http://localhost:3000/documents/${id}`)
    console.log({ url, copy })
  }
  const handleNew = (e) => {
    e.preventDefault()
    window.open('http://localhost:3000/new-document', '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='navbar'>
      <h4><img src={Logo} alt='logo' className='logo' />{' '} Google Docs</h4>
      <div>
        {copy ? <p>copied!</p> : null}
        <CopyToClipboard text={url} onCopy={() => setCopy(true)}>
          <button className='btn-primary' onClick={handleShare}>Share</button>
        </CopyToClipboard>
        {' '}
        <button onClick={handleNew} className='plus-btn'>New</button>
      </div>
    </div>
  )
}

export default Navbar
