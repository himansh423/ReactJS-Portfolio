import styles from "./Detail.module.css";
const Detail = () => {
  return (
    <div className={styles.parent}>
      <p className={styles.name}>Hi, I'm Himanshu!</p>
      <div className={styles.container}>
        <p className={styles.description}>I'm a Full-Stack<span className={styles.colorOfDev}> Developer</span>, pursuing BCA in <span className={styles.colorOfsci}>Data Science</span>.</p>
      </div>
    </div>
  );
}

export default Detail;