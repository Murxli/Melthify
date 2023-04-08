import './Navbar.css'
const Navbar = () =>{
    return(
        <nav className="navbar">
            <a href="/" className="logo">melthify</a>
            <ul className='nav-items'>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#why-us">Why us?</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <button><a href="/login">Sign in</a></button>
            {/* <button><a href="/app">Dashboard</a></button> */}
        </nav>
    )
}

export default Navbar;