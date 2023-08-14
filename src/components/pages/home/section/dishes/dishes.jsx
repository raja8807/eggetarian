import { Container } from "react-bootstrap";
import styles from "./dishes.module.scss";
import SmallCard from "@/components/ui/custom_button/cards/small-card/small-card";
import Link from "next/link";

const Dishes = () => {
  return (
    <div className={styles.dishes}>
      <Container>
        <div className={styles.dish_wrapper}>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <div className={styles.more}>
           <Link href='#'> More Dishes</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dishes;
