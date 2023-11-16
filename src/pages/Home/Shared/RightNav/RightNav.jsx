import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone1 from '../../../../assets/qZone1.png'
import Qzone2 from '../../../../assets/qZone2.png'
import Qzone3 from '../../../../assets/qZone3.png'
import bg from '../../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <Container>
                <h4>Login With</h4>
                <Container className="d-flex flex flex-column p-0">
                    <Button className="mb-2" variant="outline-primary"><FcGoogle /> Login With Google</Button>
                    <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>
                </Container>
            </Container>
            <Container>
                <h4>Find On Us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </Container>
            <Container className="bg-secondary">
                <h4>Q-Zone</h4>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </Container>
            <Container className="p-0 text-center">
                <h4 className="text-white z-1 position-absolute ">Asib</h4>
                <img src={bg} className="w-100 z-0 position-relative" alt="" />
            </Container>
        </div>
    );
};

export default RightNav;