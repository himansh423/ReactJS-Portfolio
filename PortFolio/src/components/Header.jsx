import styles from "./Header.module.css"


const Header = () => {
  return (
  <header>
    <a className={styles.name} >Himanshu Chauhan</a>
    <div className={styles.container}>
      <a className={styles.link}>About</a>
      <a className={styles.link}>Resume</a>
      <a className={styles.link}>Contact</a>
    </div>
  </header>
  );
};

export default Header;
