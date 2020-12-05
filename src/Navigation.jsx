import { useState } from "react";
import { Nav, Row, Col, Icon } from "rsuite";


const styles = { width: 100 };

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={styles}>
      <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
);
};

function Navigation() {

    const [active, setActive] = useState('home');
    const handleSelect = (activeKey) => {
    setActive(activeKey)
}
    return (
    <Row>
        <Col md={6}>
            <CustomNav appearance="subtle" active={active} onSelect={handleSelect} />
        </Col>
    </Row>
    );
}

    export default Navigation;