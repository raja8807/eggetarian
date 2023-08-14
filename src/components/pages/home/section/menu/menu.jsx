const { Row, Col, Image, Container } = require("react-bootstrap");
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <Container>
      <Row className={styles.menu}>
        <Col lg={6} className={styles.col}>
          <div>
            <Image src="/images/menu/menu1.jpg" alt="menu1" fluid />
          </div>
        </Col>
        <Col lg={6} className={styles.col}>
          <Image src="/images/menu/menu2.jpg" alt="menu2" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
