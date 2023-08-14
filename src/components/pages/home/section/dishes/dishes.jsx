import { Container } from "react-bootstrap";
import styles from "./dishes.module.scss";
import SmallCard from "@/components/ui/custom_button/cards/small-card/small-card";
import Link from "next/link";
import dishes from "@/data/dishes";

const Dishes = () => {
  // const dishes = []
  // for(let i = '1';i<=12;i++){
  //     dishes.push({id:i,img:`dish${i}`,name : `dish name ${i}`,price : i*100})
  // }

  // console.log(JSON.stringify(dishes));

 

  return (
    <div className={styles.dishes}>
      <Container>
        <div className={styles.dish_wrapper}>
          {
            dishes.map((dish)=>(
                <SmallCard key={dish.id} dish={dish}/>
            ))
          }
          <div className={styles.more}>
            <Link href="#"> More Dishes</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dishes;
