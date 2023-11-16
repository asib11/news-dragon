import Footer from "../pages/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Shared/Header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from "../pages/Home/Shared/LeftNav/LeftNav";
import LeftNav from "../pages/Home/Shared/RightNav/RightNav";

const Main = () => {
    return (
        <div>
            <Header>

            </Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col >
                    <Col lg={6}>
                        <h3 className="text-center">middle coming soon</h3>
                    </Col>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                </Row>
            </Container>
            <Footer>

            </Footer>
        </div>
    );
};

export default Main;