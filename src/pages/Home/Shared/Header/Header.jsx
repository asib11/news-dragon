import Button from 'react-bootstrap/Button';
import logo from '../../../../assets/logo.png';
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
// import { useContext } from 'react';
// import { AuthContext } from '../../../../providers/AuthProvider';

const Header = () => {
    // const {user} = useContext(AuthContext);
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
        </Container>
    );
};

export default Header;