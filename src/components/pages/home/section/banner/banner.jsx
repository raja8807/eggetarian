import { Image } from "react-bootstrap";
import styles from "./banner.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.overlay}></div>
      <div className={styles.banner_bg}>
        <div className={`${styles.banner_image} ${styles.image_1}`}
        >
          <Image src="/images/banner/egg1.png" fluid alt="egg_1" />
        </div>
        <div className={`${styles.banner_image} ${styles.image_2}`}>
          <Image src="/images/banner/eggs_in_basket.png" fluid alt="egg_2" />
        </div>
        <div className={`${styles.banner_image} ${styles.image_3}`}>
          <Image src="/images/banner/egg.png" fluid alt="egg_1" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}  data-aos="fade-down">
          <Image src="/images/logo/logo.png" fluid alt="logo" />
        </div>
        <div  data-aos="fade-left">
          <h1>EGGETARIAN</h1>
          <p>For Egg Lovers</p>
        </div>
        <div>
            
        </div>
        <CustomButton
        
        >Expolore Dishes</CustomButton>
      </div>
    </div>
  );
};

export default Banner;
