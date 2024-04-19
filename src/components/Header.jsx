import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
function Header(){
    return(
        <header className='py-2 sticky'>
            <Navbar expand="lg">
            <Container>
                <Link to="/" className='active'>
                    <img src={require('../image/asset 0.png')} alt="" />
                </Link>
                <Navbar.Toggle className='text-danger border-0 fs-3 icn-menu'><GiHamburgerMenu></GiHamburgerMenu></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3 main-menu">
                        <Nav.Link href="#"><Link to="/" className='active'>Home</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/speaker">Speakers</Link></Nav.Link>
                        <Nav.Link className='position-relative d-inline-block' href="#">
                            <Link to="/schedule">Pages</Link>
                            <ul className='sub-menu'>
                                <li><Link to="/schedule">Schedule</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/price">Price Table</Link></li>
                            </ul>
                        </Nav.Link>
                        <Nav.Link href="#" className='position-relative'>
                            <Link to="/single">Blog</Link>
                        </Nav.Link>
                        <Nav.Link href="#"><Link to="/contact">Conatct</Link></Nav.Link>
                    </Nav>
                    <p className='text-center ps-5'><a href="#" className='ticket'>GET TICKET</a></p>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}
export default Header;