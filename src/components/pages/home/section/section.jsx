import styles from "./section.module.scss";

const Section = (props) => {
  const { children } = props;
  return <section className={`${styles.section}`}>{children}</section>;
};
export default Section;
