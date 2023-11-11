import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";


const LeftNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Container className="d-flex flex flex-column p-0">
                <Button className="mb-2" variant="outline-primary"><FcGoogle/> Login With Google</Button>
                <Button variant="outline-secondary"> <FaGithub/> Login With Github</Button>
            </Container>
        </div>
    );
};

export default LeftNav;