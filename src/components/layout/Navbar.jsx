import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-primary">
            <h2>Kafqa Ventures</h2>
            <h3><Link to='/login'>Login</Link></h3>
        </nav>
    )
}

export default Navbar
