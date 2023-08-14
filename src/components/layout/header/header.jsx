const { Image, Container } = require("react-bootstrap");
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        {/* <Container> */}
          <Image src="/images/banner/egg.png" alt="header_button" />
        {/* </Container> */}
      </div>
    </header>
  );
};

export default Header;
