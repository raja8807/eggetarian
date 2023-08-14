import { Image } from "react-bootstrap";
import styles from "./small-card.module.scss";
import CustomButton from "../../custom_button";

const SmallCard = ({dish}) => {
  return (
    <div className={styles.small_card} data-aos="flip-left">
      <div className={styles.card_img}>
        <Image src={`/images/dishes/${dish.img}.jpg`} fluid alt={dish.img}/>
      </div>
      <div className={styles.details}>
        <h3>{dish.name}</h3>
        <h2>Rs {dish.price}/-</h2>
        <button>
            View
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
