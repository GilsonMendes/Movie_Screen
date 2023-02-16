import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link className='logo' to={'/'}>Tela Home</Link>
            <Link className='favoritos' to={'/favoritos'}>Favoritos</Link>
        </header>
    )
}

export default Header;