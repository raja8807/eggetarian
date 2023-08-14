import Banner from "./section/banner/banner";
import Dishes from "./section/dishes/dishes";
import Section from "./section/section";

const HomePage = () => {
  return (
    <>
      <Section>
        <Banner />
      </Section>
      <Section heading="Our Dishes" varient="yellow">
        <Dishes />
      </Section>
      <Section heading="Our Menu" varient="violet">
        <Dishes />
      </Section>
      {/* <Section>section 3</Section> */}
    </>
  );
};

export default HomePage;
