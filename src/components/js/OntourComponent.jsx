import styles from "../css/OntourComponent.module.css";

const Ontourcomponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dateicon}>
        <p className={styles.month}>Dec</p>
        <p className={styles.day}>6</p>
      </div>
      <div className={styles.ontourcomponent}>
        <p>Sao Paulo</p>
        <p>Aurora</p>
        <p>Sat 7:00 PM • Place</p>
      </div>
    </div>
  );
};

export default Ontourcomponent;
