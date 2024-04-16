import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { useContext } from "react";
import { Context } from "../store/Context-api";



const Header = () => {
 const {sethome,setAbout,tab,setResume,setContact} = useContext(Context);

  return (
  <header>
    <Link to={"/"} className={styles.name} >Himanshu Chauhan</Link>
    <div className={styles.container}>
    <Link to={"/"} className={`${styles.link} ${styles.default} ${ tab==="home" ? styles.color : ''}`} onClick={sethome} >Work</Link>
      <Link to={"/about"} className={`${styles.link}  ${tab==="about" ? styles.color : ''}`} onClick={setAbout}>About</Link>
      <a className={`${styles.link} ${tab==="resume" ? styles.color : ''}`} onClick={setResume}>Resume</a>
    </div>
  </header>
  );
};

export default Header;
