import { Container } from "react-bootstrap";
import styles from "./dishes.module.scss";
import SmallCard from "@/components/ui/custom_button/cards/small-card/small-card";
import Link from "next/link";

const Dishes = () => {
  // const dishes = []
  // for(let i = '1';i<=12;i++){
  //     dishes.push({id:i,img:`dish${i}`,name : `dish name ${i}`,price : i*100})
  // }

  // console.log(JSON.stringify(dishes));

  const dishes = [
    { id: "1", img: "dish1", name: "dish name 1", price: 100 },
    { id: 2, img: "dish2", name: "dish name 2", price: 200 },
    { id: 3, img: "dish3", name: "dish name 3", price: 300 },
    { id: 4, img: "dish4", name: "dish name 4", price: 400 },
    { id: 5, img: "dish5", name: "dish name 5", price: 500 },
    { id: 6, img: "dish6", name: "dish name 6", price: 600 },
    { id: 7, img: "dish7", name: "dish name 7", price: 700 },
    { id: 8, img: "dish8", name: "dish name 8", price: 800 },
    { id: 9, img: "dish9", name: "dish name 9", price: 900 },
    { id: 10, img: "dish10", name: "dish name 10", price: 1000 },
    { id: 11, img: "dish11", name: "dish name 11", price: 1100 },
    { id: 12, img: "dish12", name: "dish name 12", price: 1200 },
  ];

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
