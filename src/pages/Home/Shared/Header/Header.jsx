import Button from 'react-bootstrap/Button';
import logo from '../../../../assets/logo.png';
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container className="text-center my-5">
            <div >
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center bg-body-tertiary p-2'>
                <Button variant="danger rounded-0">Latest</Button>
                <Marquee speed={100}>
                    <p className='m-0'>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </p>
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-light">
                <Container className='px-0'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user && <Nav.Link href="#deets">
                                    <Link><FaUserCircle className='text-black display-6'></FaUserCircle> </Link>
                                </Nav.Link>

                            }
                            <Nav.Link className='px-0' eventKey={2} href="#memes">
                            {
                                user ? <Button className='rounded-0 px-4' variant="dark">Logout</Button>: <Button className='rounded-0 px-4' variant="dark">Login</Button>
                            }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;