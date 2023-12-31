// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/esm/Button';
import { AuthContext } from '../../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-light">
                <Container className='px-0'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Link to='/'>Home</Link>
                            <Link>About</Link>
                            <Link>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user && <Link><FaUserCircle className='text-black display-6'></FaUserCircle> </Link>
                            }
                            
                                {
                                    user ? <Link to='/category/0'><Button onClick={handleLogOut} className='rounded-0 px-4' variant="dark">Logout</Button></Link>  :<Link to='/login'><Button className='rounded-0 px-4' variant="dark">Login</Button></Link> 
                                }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;