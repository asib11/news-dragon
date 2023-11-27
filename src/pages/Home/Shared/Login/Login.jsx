// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser)
        })
        .catch(error => console.log(error));
        form.reset()

    }
    return (
        <Container className='w-25 m-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                        Dont have any account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-muted">
                        
                </Form.Text>
                <Form.Text className="text-muted">
                        
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;