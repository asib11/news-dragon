import Footer from "../pages/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Shared/Header/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from "../pages/Home/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <Header>

            </Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
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

export default NewsLayout;