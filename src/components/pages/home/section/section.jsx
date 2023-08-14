import styles from "./section.module.scss";

const Section = (props) => {
  const { children, heading,varient } = props;
  return (
    <section className={`${styles.section} ${styles[varient]}`}

    >
      {heading && <h1>{heading}</h1>}
      {children}
    </section>
  );
};
export default Section;
