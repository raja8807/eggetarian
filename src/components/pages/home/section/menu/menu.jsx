const { Row, Col, Image, Container } = require("react-bootstrap");
import MENU from "@/data/menu";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <Container>
      <Row className={styles.menu}>
        {MENU.map((m) => (
          <Col lg={6} className={styles.col} key={m.id}>
            <div>
              <Image src={`/images/menu/${m.src}.jpg`} alt="menu1" fluid />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
