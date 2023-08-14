import { Image } from "react-bootstrap";
import styles from "./small-card.module.scss";
import CustomButton from "../../custom_button";

const SmallCard = () => {
  return (
    <div className={styles.small_card} data-aos="flip-left">
      <div className={styles.card_img}>
        <Image src="/images/dishes/dish1.jpg" fluid />
      </div>
      <div className={styles.details}>
        <h3>Stuffed Babycorn / Mushroom</h3>
        <h2>Rs 160/-</h2>
        <button>
            View
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
